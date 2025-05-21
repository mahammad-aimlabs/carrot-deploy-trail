import { Howl } from 'howler';

import { type LoadedAudio } from 'pixi-svelte';
import { waitForTimeout } from 'utils-shared/wait';

import type { StopOptions, FadeOptions, GetSound, GetSoundMap, RateOptions } from './types';

function createPlayer<TSoundName extends string, TPlay extends Function>(playerOptions: {
	loadedAudio: LoadedAudio<TSoundName>;
	loop: boolean;
	createPlay: (options: {
		howl: Howl;
		newSound: (value: TSoundName) => GetSound<TSoundName>;
		getSoundMap: () => GetSoundMap<TSoundName>;
	}) => { play: TPlay };
}) {
	type Sound = GetSound<TSoundName>;

	type SoundMap = Record<TSoundName, Sound>;

	let soundMap = $state<SoundMap>({} as SoundMap);

	const howl = new Howl({
		src: playerOptions.loadedAudio.src,
		sprite: playerOptions.loadedAudio.sprite,
		loop: playerOptions.loop,
	});

	const newSound = (soundName: TSoundName) =>
		({
			soundName,
			soundId: 0,
			soundState: 'new',
			soundConfig: playerOptions.loadedAudio.config[soundName] ?? { volume: 1 },
		}) as Sound;

	const { play } = playerOptions.createPlay({
		howl,
		newSound,
		getSoundMap: () => soundMap,
	});

	const stop = (stopOptions: StopOptions<TSoundName>) => {
		const existingSound = soundMap[stopOptions.name];
		if (existingSound) {
			howl.stop(existingSound.soundId);
			delete soundMap[existingSound.soundName];
		}
	};

	const fade = async (fadeOptions: FadeOptions<TSoundName>) => {
		const existingSound = soundMap[fadeOptions.name];
		if (existingSound) {
			howl.fade(fadeOptions.from, fadeOptions.to, fadeOptions.duration, existingSound.soundId);
			await waitForTimeout(fadeOptions.duration);
		}
	};

	const rate = (rateOptions: RateOptions<TSoundName>) => {
		const existingSound = soundMap[rateOptions.name];
		if (existingSound) {
			howl.rate(rateOptions.rate, existingSound.soundId);
		}
	};

	const volume = (volume: number) => {
		(Object.values(soundMap) as Sound[]).forEach((sound) => {
			howl.volume(volume * sound.soundConfig.volume, sound.soundId);
		});
	};

	const debug = () => {
		console.log($state.snapshot(soundMap));
	};

	return {
		play,
		stop,
		fade,
		volume,
		rate,
		howl,
		debug,
	};
}

export type Player<TSoundName extends string, TPlay extends Function> = ReturnType<
	typeof createPlayer<TSoundName, TPlay>
>;

export { createPlayer };

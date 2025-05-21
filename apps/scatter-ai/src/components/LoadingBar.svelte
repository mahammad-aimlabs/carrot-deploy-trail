
<Container x={x} y={y}>
    <Sprite  key="loading_base" anchor={0.5} scale={0.5}/>
    <Container>
        <Container x={-338 + (650 * (context.stateApp.loadingProgress / 100)) }>
            <Sprite  key="loading_fill" anchor={{x:1,y:0.5}} scale={0.5} />
            <Sprite  key="loading_marker" anchor={0.5} scale={0.5} x={-10}/>
    
        </Container>
        <Rectangle
           isMask={true}
           backgroundColor={'red'}
           backgroundAlpha={0.5}
           x={-1}
           anchor={0.5}
           borderRadius={17}
            height={29}
            width={638}
        />
    </Container>
    <Sprite  key="loading_border" anchor={0.5} scale={0.5}/>    
</Container>
<script lang="ts">
	import { Sprite ,Rectangle, Container,getContextApp} from "pixi-svelte";

    const {x=0,y=0} = $props()
	const context = getContextApp();
    // $effect(()=>{
    //     console.log(context.stateApp.loadingProgress / 100)
    // })
   
</script>
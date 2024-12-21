<script>
	import Section from '$lib/components/layout/Section.svelte';
	import NeonText from '$lib/components/ui/Neon/NeonText.svelte';

	const multipleInteligentTheoryWikiLink =
		'https://es.wikipedia.org/wiki/Teor%C3%ADa_de_las_inteligencias_m%C3%BAltiples';

	const ccElMuelleOpenResults =
		'https://www.worldcubeassociation.org/competitions/CCElMuelleOpen2019/results/all?event=333';

	/*
Spanish
<Section classname="pt-6 lg:px-48">
	<div class="text-md font-normal text-white">
		<NeonText text="My Journey" textClasses="text-2xl"></NeonText>
		<br />
		<p class="mb-16">
			¡Hola! Soy Tomhuel, espero que te esté gustando mi sitio web 😉. <br /> En esta sección
			encontrarás un poco más sobre <span class="text-light-pink">mi camino</span> personal y profesional,
			los proyectos, etapas y logros que me han marcado para que te puedas ubicar más fácilmente con
			mi perfil. ¡Espero que disfrutes leyéndolo!
		</p>
		<div class="mb-12">
			<NeonText text="About me" textClasses="text-2xl"></NeonText>
			<p>
				Me llamo Tomás Nahuel, nací en 2003 en Valencia, pero a temprana edad me fui a vivir a <span
					class="text-light-pink">Tenerife</span
				>, <span class="text-lightblue">Canarias</span>. Desde pequeña edad siempre he tenido un
				comportamiendo obsesivo con aquellas cosas que me gustaban, al punto de que muchas veces esa
				pasión y amor la he podido <span class="text-lightblue">contagiar</span> a la gente de mi alrededor.
			</p>

			<p>
				Académicamente no era un alumno destacable, pero gracias mis defectos académicos tuve la
				oportunidad de entrar a los 14 años a unas "clases de refuerzo". Estas clases las impartía <span
					class="text-light-pink">Cerebritos</span
				>
				quienes son partidarios de la teoría de las
				<a
					href={multipleInteligentTheoryWikiLink}
					target="_blank"
					class="text-lightblue hover:underline">inteligencias múltiples</a
				>.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="The rubik's cube in my life" textClasses="text-2xl"></NeonText>

			<p>
				En la academia de Cerebritos conocí un puzzle que tal vez haya supuesto uno de mis grandes
				logros a lo largo de mi vida: el <span class="text-light-pink">cubo de Rubik</span>. En la
				academia nadie sabía resolverlo y me puse como primera meta aprender a resolverlo. Al cabo
				de 3 días prácticando sin parar y viendo un vídeo de Youtube, logré la gran hazaña.
			</p>
			<p>
				Después de disfrutar tanto resolviéndolo sin parar, conocí a unos conocidos en el instituto
				que me enseñaron que habían muchos más cubos distintos al convencional. Habían cubos
				grandes, pequeños, redondos, dodecaedros, etc. De todo.
			</p>

			<p>
				Conforme yo más aprendía y más disfrutaba, más compartía con mis conocidos de la academia.
				Sobretodo quien era mi instructor y ahora amigo, Abraham. Le propuse con 14 años hacer una
				actividad en un evento municipal para enseñar a la gente en la calle a resolver este puzzle
				tan singular y generarles esa pizca de curiosidad.
			</p>

			<p>
				¡Resultó un éxito! No logramos enseñar a absolutamente a nadie, pero gracias a eso
				Cerebritos ganó popularidad y podíamos ofrecer una cantidad de minijuegos orientados al cubo
				de rubik. Yo solo pensar que podríamos seguir haciendo actividades para poder seguir
				compartiendo nuestra pasión me alegraba mucho y nos sentíamos realizados.
			</p>

			<p>
				Desde entonces, Cerebritos ha seguido durante 7 años consecutivos desarrollando actividades
				para todo tipo de entidades orientadas a las inteligencias múltiples y usando el cubo de
				rubik como intermediario.
			</p>

			<p>
				Alrededor del primer año con Cerebritos, me dieron la oportunidad de poder participar en mi
				primer <a
					href={ccElMuelleOpenResults}
					class="text-light-pink hover:underline"
					target="_blank">torneo oficial</a
				>
				de cubos de Rubik, ya que para ese entonces yo ya estaba promediando una media de
				<span class="text-lightblue">15 segundos</span> con el cubo clásico 3x3.
			</p>

			<p>
				Para agrado de muchos, logré quedar undécimo en la final de dicho torneo, siendo mi mejor
				tiempo <span class="text-lightblue">13.72 segundos</span>. Uno de los logros de los que más
				orgulloso estoy.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="How I Got Into Computing" textClasses="text-2xl"></NeonText>

			<p>
				Antes de conocer una de mis actuales pasiones y hobbies, la informática, seguí colaborando
				con Cerebritos de forma voluntaria y me encargé de ser <span class="text-light-pink"
					>monitor</span
				>
				y/o <span class="text-light-pink">coordinador</span> de muchas actividades en distintos
				eventos como la <span class="text-lightblue">TenerifeGG</span> o el
				<span class="text-lightblue">Foro Gamer de los Realejos</span>. Era bastante concurrente que
				los monitores y formadores de informática me comentaran que era probable de que me gustara
				la <span class="text-light-pink">programación</span>, ya que la resolución del cubo de rubik
				se compone de <span class="text-lightblue">patrones</span> y
				<span class="text-lightblue">algoritmos de resolución</span>.
			</p>

			<p>
				Durante todo el tiempo que estuve en el instituto, yo tenía claro que quería ser <span
					class="text-light-pink">profesor de magisterio de primaria</span
				>, debido a la larga experiencia como <span class="text-lightblue">instructor</span> y/o
				<span class="text-lightblue">tutor</span>
				con Cerebritos. Pero en 2021 cursé mi último año de Bachillerato y aprendí a programar cosas
				muy básicas en <span class="text-lightblue">Python</span>. Mi profesor tenía exactamente el
				mismo don que yo, compartir su pasión, y me lo contagió.
			</p>

			<p>
				Fue entonces que decidí rechazar la opción de ir a la universidad y me matriculé al ciclo
				formativo de grado superior de <span class="text-light-pink"
					>desarrollo de aplicaciones web</span
				>. Para ese entonces no tenía ni la más mínima idea sobre qué iba el ciclo, ni de qué iba a
				trabajar, ni absolutamente nada relacionado con el sector. Solo sabía que me gustaba hacer
				scripts en Python.
			</p>

			<p>
				Empecé el ciclo formativo en 2021 y por suerte mía me acabó encantando el mundo de la
				informática. Aprendí a programar en <span class="text-lightblue">Java</span>,
				<span class="text-lightblue">PHP</span>, <span class="text-lightblue">JavaScript</span> y
				<span class="text-lightblue">TypeScript</span>. No usé Python al final, pero descubrí que
				<span class="text-light-pink">no era Python lo que me gustaba</span>. Lo que me gusta es
				desarrollar y tener la capacidad de poder
				<span class="text-lightblue">crear soluciones y herramientas</span> desde 0.
			</p>
		</div>
	</div>
</Section>
	*/
</script>

<svelte:head>
	<title>About - Tomhuel</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section classname="pt-6 lg:px-48">
	<div class="text-md font-normal text-white">
		<NeonText text="My Journey" textClasses="text-2xl"></NeonText>
		<br />
		<p class="mb-16">
			Hi there! I'm Tomás, I hope youcan enjoy my website 😉. <br /> In this section,
			you'll find a little more about <span class="text-light-pink">my personal and professional journey</span>,
			the projects, milestones, and achievements that have shaped me, so you can get a better sense of who I am. I hope you enjoy reading it!
		</p>
		<div class="mb-12">
			<NeonText text="About me" textClasses="text-2xl"></NeonText>
			<p>
				My name is Tomás Nahuel. I was born in 2003 in Valencia, but at an early age, I moved to <span
					class="text-light-pink">Tenerife</span
				>, <span class="text-lightblue">Canary Islands</span>. From a young age, I've always had an obsessive behavior toward the things I liked, to the point that I often managed to <span class="text-lightblue">spread</span> that passion and love to the people around me.
			</p>

			<p>
				Academically, I wasn’t a standout student, but thanks to my academic struggles, I had the opportunity to attend "remedial classes" at the age of 14. These classes were taught by <span
					class="text-light-pink">Cerebritos</span
				>, an organization that supports the theory of
				<a
					href={multipleInteligentTheoryWikiLink}
					target="_blank"
					class="text-lightblue hover:underline">multiple intelligences</a
				>.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="The rubik's cube in my life" textClasses="text-2xl"></NeonText>

			<p>
				At Cerebritos, I came across a puzzle that may represent one of my greatest achievements in life: the <span class="text-light-pink">Rubik's Cube</span>. At the academy, no one knew how to solve it, so I set my first goal: learn how to solve it. After three days of relentless practice and watching a YouTube video, I managed to achieve the feat.
			</p>
			<p>
				After enjoying solving it over and over again, I met some acquaintances at school who introduced me to a whole variety of cubes beyond the conventional one. There were large cubes, small cubes, round ones, dodecahedrons, and more.
			</p>

			<p>
				The more I learned and enjoyed it, the more I shared it with my acquaintances at the academy, especially with my instructor and now friend, Abraham. At 14, I proposed organizing an activity at a local event to teach people on the street how to solve this unique puzzle and spark their curiosity.
			</p>

			<p>
				It was a success! Although we didn’t manage to teach anyone, Cerebritos gained popularity, and we started offering a variety of mini-games centered around the Rubik's Cube. Just the thought of continuing to organize activities to share our passion made me incredibly happy and fulfilled.
			</p>

			<p>
				Since then, Cerebritos has spent seven consecutive years developing activities for various entities, all centered around multiple intelligences and using the Rubik's Cube as a medium.
			</p>

			<p>
				Around the first year with Cerebritos, I was given the opportunity to participate in my first <a
					href={ccElMuelleOpenResults}
					class="text-light-pink hover:underline"
					target="_blank">official tournament</a
				>
				for Rubik's Cubes, as by then I was averaging <span class="text-lightblue">15 seconds</span> on the classic 3x3 cube.
			</p>

			<p>
				To the delight of many, I managed to finish eleventh in the final of that tournament, with my best time being <span class="text-lightblue">13.72 seconds</span>. It’s one of the achievements I’m most proud of.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="How I Got Into Computing" textClasses="text-2xl"></NeonText>

			<p>
				Before discovering one of my current passions and hobbies, computing, I continued collaborating voluntarily with Cerebritos. I took on roles as a <span class="text-light-pink">monitor</span> and/or <span class="text-light-pink">coordinator</span> for many activities at events like <span class="text-lightblue">TenerifeGG</span> or the <span class="text-lightblue">Foro Gamer de Los Realejos</span>. It was quite common for the computer science instructors and trainers to tell me that I might enjoy <span class="text-light-pink">programming</span>, as solving the Rubik's Cube involves <span class="text-lightblue">patterns</span> and <span class="text-lightblue">algorithms</span>.
			</p>

			<p>
				During my time in high school, I was convinced I wanted to become a <span class="text-light-pink">primary school teacher</span> due to my extensive experience as an <span class="text-lightblue">instructor</span> and/or <span class="text-lightblue">tutor</span> with Cerebritos. However, in 2021, during my final year of high school, I learned to program basic scripts in <span class="text-lightblue">Python</span>. My teacher had the same gift I have—sharing his passion—and he passed it on to me.
			</p>

			<p>
				It was then that I decided to forgo university and enrolled in a higher-level vocational program in <span class="text-light-pink">web application development</span>. At that time, I had no idea what the program was about, what kind of job I would pursue, or anything about the industry. I only knew I liked scripting in Python.
			</p>

			<p>
				I started the program in 2021, and fortunately for me, I fell in love with the world of computing. I learned to program in <span class="text-lightblue">Java</span>, <span class="text-lightblue">PHP</span>, <span class="text-lightblue">JavaScript</span>, and <span class="text-lightblue">TypeScript</span>. I didn’t end up using Python, but I discovered that <span class="text-light-pink">it wasn’t Python itself I loved</span>. What I enjoy is developing and having the ability to <span class="text-lightblue">create solutions and tools</span> from scratch.
			</p>
		</div>
	</div>
</Section>


<style>
	p {
		margin-top: 1rem;
	}
</style>

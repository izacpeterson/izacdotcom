<script>
  export let data;
  let { projects } = data;
  console.log(projects[0]);
</script>

<ul className="flex">
  {#each projects as project}
    <a href={project.url} target="_blank" className="w-1/4">
      <div className="text-white bg-zinc-800 p-4 m-4  h-40 shadow-lg flex flex-col justify-between">
        <h2 className="underline text-2xl">{project.name}</h2>
        <p>{project.desc}</p>
        <ul className="flex w-full justify-evenly p-2">
          {#each project.tags as tag}
            <li className="text-xs italic">{tag}</li>
          {/each}
        </ul>
      </div>
    </a>
  {/each}
</ul>

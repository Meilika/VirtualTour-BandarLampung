const client = require('contentful').createClient({
    space: 'bbz53og4s23c',
    accessToken: 'cFYOa041mQACu2WeoR9jEYfv2_26S7kJ5Iw4JGCPetA'
  })
  
  const getBlogPosts = () => client.getEntries().then(response => response.items)
  
  const getSinglePost = slug =>
    client
      .getEntries({
        'fields.slug': slug,
        content_type: 'wisataLampung'
      })
      .then(response => response.items)
  
  
  
  export { getBlogPosts, getSinglePost }
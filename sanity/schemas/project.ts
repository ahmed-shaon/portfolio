import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name:"title",
      title:"title",
      description:"title of the project",
      type:"string",
    },
    {
      name:"image",
      title:"Image",
      type:"image",
      options:{
        hotspot:true
      }
    },    
    {
      name:"summary",
      title:"Summary",
      type:"text"
    },
    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{type:"reference", to:{type:"skill"}}]
    },  
    {
      name:"linkTobuild",
      title:"linkTobuild",
      type:"url"
    }
    
  ],

  
})



// defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),


    // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
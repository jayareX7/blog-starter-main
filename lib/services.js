import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'


const servicesDirectory = join(process.cwd(), 'data/_services')



export function getServiceSlugs() {
  return fs.readdirSync(servicesDirectory, (err, files) => {
    if (err) {
      return console.log ('Failed to load the contents in directory: ' + err )
    }
  })
}
  



export function getServiceBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(servicesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}



export function getAllServiceTypes(fields = []) {
  const slugs = getServiceSlugs()
  const posts = slugs
    .map((slug) => getServiceBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}
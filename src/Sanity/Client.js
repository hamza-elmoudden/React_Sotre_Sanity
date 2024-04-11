import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export  const client = createClient({
        projectId: "rvhx6dqx",
        dataset: "store",
        useCdn: true,
        token:"skmmoohgx0eqb4GheT6e0kMvOk54rf4s3W7zi8B4ak8IKojdyExqqYDFu0jFhU1TCWFHwkpSLk0lFeotiNL35O6mVXDPZx6sxIncseEjx9UzyVHB3YRvjBnn359eZ77PJavn3Lj1wcxRsdbR0gikXj2ChuasurXYT8J9aRwsGZtfGpX2WkP6",
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
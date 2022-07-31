# Keystone 6 Document Gallery Block

Manage and upload your post images with a gallery block for powerful [Keystone's Document Editor](https://keystonejs.com/docs/guides/document-field-demo)!

![Demonstration](https://i.imgur.com/DNrVcXs.gif)
## Installation

Install the yarn package:

```bash
yarn add @beemstream/keystone-document-gallery
```

## Usage

Make sure you [configure image uploading](https://keystonejs.com/docs/apis/config#storage-images-and-files) in keystone.ts config, otherwise it will not work:

```typescript
images: {
  kind: 'local',
  type: 'image',
  generateUrl: path => `${process.env.SERVER_URL}/images${path}`,
  serverRoute: {
      path: '/images',
  },
  storagePath: 'public/images',
},
```

Add a new list to your schema (you can set your own list key, if needed):

```typescript
Image: list({
    fields: {
        name: text(),
        image: image({ storage: 'images' }), // choose storage provider
        publishDate: timestamp(),
    }
})
```

Create **component-blocks.tsx** in your root directory and import the gallery block (don't forget to change **listKey**, if it is different):

```typescript
import { gallery } from "@beemstream/keystone-document-gallery";

// naming the export componentBlocks is important because the Admin UI
// expects to find the components like on the componentBlocks export
export const componentBlocks = {
    gallery: gallery({
        listKey: "Image",
    }),
};
```

Import the file in schema.ts:

```typescript
import { componentBlocks } from './component-blocks';
```

Add the component blocks to the document configuration for the list that you want (e.g. Post):

```typescript
Post: list({
    ...
    content: document({
        ui: {
            views: require.resolve('./component-blocks')
        },
        componentBlocks
    })
}),
```

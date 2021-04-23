# PROJET COPYGRAM

projet simplon student with azure storage and azure function

## BlobTrigger - JavaScript

The `BlobTrigger` makes it incredibly easy to react to new Blobs inside of Azure Blob Storage. This sample demonstrates a simple use case of processing data from a given Blob using JavaScript.

### How it works

First create your azure account storage with two containers. First container will contain your `blobtrigger`.
Second container will contain your little blob added.

Then last step you will create your azure function for BlobTrigger.

For a `BlobTrigger` to work, you provide a path which dictates where the blobs are located inside your container, and can also help restrict the types of blobs you wish to return. For instance, you can set the path to `samples/{name}.png` to restrict the trigger to only the samples path and only blobs with ".png" at the end of their name.

### technologie

nodejs
azure function
azure storage

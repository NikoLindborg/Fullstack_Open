


// const note = new Note({
//   content: 'HTML is easy',
//   date: new Date(),
//   important: true,
// })

// note.save().then(response => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })
Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
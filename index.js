const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      for(let i in collection){
        callback(collection[i])
      }
return collection
    },

    reduce: function(collection,callback,acc) {
for(let i in collection){
  if(acc===undefined){
    acc=collection[i]
  }
  else{
    acc=callback(acc,collection[i],collection)
  }

  
}return acc
    },

    map: function() {

    },

    flatten: function(array,shallow) {
      if(!Array.isArray(array)){
        return newArray.push(array)
      }
     
      if(shallow){
        for(let value of array){
          if(array.isArray(value)){
            for(let k=0;k<value.length;k++){
              newArray.push(value[k])
            }
          }else{
        newArray.push(value)
      }
        
      }
}else{for(let value of array)
  {this.flatten(value,false,newArray)}
} 
return newArray
    },


  }
})()

fi.libraryMethod()

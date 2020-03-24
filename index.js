const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(arr,alert) {
        for (let element in arr){
           alert(arr[element])
        }
      return arr  
    },
     map: function(arr,func) {
      let array = []
      for (let element in arr){
        let k=func(arr[element])
        
        array.push(k)
      }
      return array
    },
  
    reduce: function(array,func,acc) {
        for(let element in array){
          if(acc===undefined)
          {acc=array[element]}
          else{
            acc=func(acc,array[element],array)}
        }
        return acc
    },
    find : function(array, predicate){
        for( let ele of array )
        {
        if(predicate(ele )) return ele  
        }
        return undefined 
    },
    filter : function(array, predicate){
      let arr = []
      for (let element of array){
        if(predicate(element)) arr.push(element)
      }
      return arr 
    },
    size:function(collection){
      let ind = 0 
      for(let element in collection){
          ind += 1
      }
      return ind
    },
     first: function(array,n){
      if (n === undefined){
        return array[0]
      }else{
        return array.slice(0,n)
      }
    },

    last: function(array,n){
      if (n === undefined){
        return array[array.length-1]
      }else{
        return array.slice(-n)
      }

    },
    
    
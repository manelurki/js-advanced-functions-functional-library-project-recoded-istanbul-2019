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
    
    
    
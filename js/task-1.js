function slugify(title) {
  
   const words = title.toLowerCase();
  const slug = words.split(" ");
 
  {
    return slug.join("-");

  }
  

//   title = title.replace(/\s+/g, '-').toLowerCase();;
//  return title
}



  
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


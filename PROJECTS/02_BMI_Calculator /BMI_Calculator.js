const form = document.querySelector('form')
// this useCase will give you empty
// const height =  document.querySelector(('#height').valueOf)

form.addEventListener('submit', (e) => {
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
   const result =  document.querySelector('#results')
   const  text = document.querySelector('#text')

   if(height == '' || height < 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
   }
   else if(weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
   }else{
    const BMI = (weight / ((height*height)/10000).toFixed(2));
    //show the result
    result.innerHTML = `<span>${BMI}</span>`;
       if(BMI <= 18.6){
        text.innerHTML = `<span>Under Weight</span>`
       }
       else if(BMI >= 18.6 && BMI <= 24.9){
        text.innerHTML = `<span>Normal Range</span>`
       }
       else{
        text.innerHTML = `<span>Over Weight</span>`
       }
   }
})
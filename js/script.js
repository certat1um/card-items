// console.log('test');

window.addEventListener('DOMContentLoaded', () => {

   class Card_item {

      constructor(img_src, img_alt, title, text, color_category, parent, btn) {
         this.img_src = img_src;
         this.img_alt = img_alt;
         this.title = title;
         this.text = text;
         this.parent = parent;
         this.btn = btn;
         this.color_category = color_category;
      }
   
      addCardItem() {
         let element = document.createElement('div');
         element.classList.add('card-item');
         this.parent = document.querySelector('.cards');
   
         element.innerHTML = `
            <img src=${this.img_src} alt=${this.img_alt} class="card-img">
            <h3 class="card-heading">${this.title}</h3>
            <div class="card-text">
               ${this.text}
            </div>
            <a href="" class="card-btn" data-color=${this.color_category}>Buy now</a>
         `;
   
         this.parent.append(element);
      }
   }
   
   new Card_item(
      img_src = 'img/tomatoes.jpg',
      img_alt = 'tomatoes',
      title = 'Tomatoes',
      text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, magnam dolorum! Quisquam maxime neque expedita.',
      color_category = 'red'
   ).addCardItem();
   
   new Card_item(
      img_src = 'img/cucumber.jpg',
      img_alt = 'cucumbers',
      title = 'Cucumbers',
      text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet itaque recusandae molestiae nobis maiores voluptates debitis ea, dolores voluptatem.',
      color_category = 'green'
   ).addCardItem();
   
   new Card_item(
      img_src = 'img/lettuce.jpg',
      img_alt = 'lettuce',
      title = 'Lettuce',
      text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam unde esse dolor. Quam id totam et vero! Temporibus, est magnam!',
      color_category = 'lime'
   ).addCardItem();
});
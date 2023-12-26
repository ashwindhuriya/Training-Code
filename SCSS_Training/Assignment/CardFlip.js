const cards_data = [
  {
    image_url: "url('./assets/waterfall.jpg')",
    back_face_content: `<div class="content">
    <div class="heading">Waterfall</div>
    <div class="subheading">A beautiful Waterfall</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./assets/citylights1.jpg')",
    back_face_content: `<div class="content">
    <div class="heading">Citylights 1</div>
    <div class="subheading">The first Citylight</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./assets/citylights2.jpg')",
    back_face_content: `<div class="content">
    <div class="heading">Citylights 2</div>
    <div class="subheading">The second Citylight</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./assets/lightspeed.jpg')",
    back_face_content: `<div class="content">
    <div class="heading">Lightspeed</div>
    <div class="subheading">A Fast Timelapse</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
  {
    image_url: "url('./assets/universe.jpg')",
    back_face_content: `<div class="content">
    <div class="heading">Universe</div>
    <div class="subheading">A Deep Universe</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt .
    </div>
</div>`,
  },
];

let counter = 1;

const exec1 = () => {
  setInterval(() => {
    const front_face = document.getElementsByClassName("front_face")[0];
    const back_face = document.getElementsByClassName("back_face")[0];

    front_face.style.backgroundImage = cards_data[counter].image_url;
    back_face.innerHTML = cards_data[counter].back_face_content;

    counter = (counter + 1) % cards_data.length;
  }, 5000);
};

exec1();

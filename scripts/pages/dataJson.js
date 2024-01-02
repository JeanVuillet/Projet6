// function getData
async function getData() {
  const reponse = await fetch("data/photographers.json");
  // feching data in json
  const data = await reponse.json();

  return data;
}
export { getData };

export default class DataObject {
  data = getData();

  async getPhotoMedia(id) {
    //   importation des donnes json
    // importation des donnes json

    const reponse = await fetch("data/photographers.json");
    const data = await reponse.json();

    // const media =await data.filter(function (data){ data.media.id==id})
    return data;
  }

  async getPhotographerById(id) {
    const data = await getData();
    const photographer = data.photographers.filter(
      (photographers) => photographers.id == id,
    );
    return photographer;
  }

  async getMediaById(id) {
    const data = await getData();
    const media = data.media.filter((media) => media.photographerId == id);
    return media;
  }
}

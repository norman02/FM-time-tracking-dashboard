// const tracker = document.getElementById("js-tracker");

// /**
//  * create a tracker card
//  * @param image (string) URL of the background image
//  * @param color (string) color of the background
//  * @param name (string) the name of the activity
//  * @param hours (number)number of hours completed this session
//  * @param lastHours (number) of hours completed last session
//  */
// const createTrackerCard = (image = "", color="", name = 'Activity', hours = 0, lastHours = 0) => {
//   /** create tracker card */
//   const trackerCard = document.createElement("section");
//   trackerCard.classList.add("tracker__card");
//   tracker.appendChild(trackerCard);
//   /** create background element
//    * @param imageUrl (string) URL for the background image
//    * @param backgroundColor (string) background color
//   */
//   const createTrackerCardBackground = (imageUrl, backgroundColor) => {
//     const trackerCardBackground = document.createElement("div");
//     trackerCardBackground.classList.add("tracker__card--bg");
//     trackerCardBackground.style.backgroundColor = backgroundColor
//     trackerCard.appendChild(trackerCardBackground);
//     const backgroundImage = document.createElement("img");
//     backgroundImage.src = imageUrl;
//     trackerCardBackground.appendChild(backgroundImage);
//   }
//   createTrackerCardBackground(image, color)

//   /** create data element */
//   const trackerCardData = document.createElement("div");
//   trackerCardData.classList.add("tracker__card--data");
//   trackerCard.appendChild(trackerCardData);
//   /** Add content to data element
//    * @param activityName the name of the activity
//    * @param currentHours hours completed this session
//    * @param prevHours hours completed last session
//    */
//   const addDataCardContent = (activityName, currentHours, prevHours) => {
//     // create title
//     const activityNameField = document.createElement("h2");
//     activityNameField.textContent = activityName;
//     trackerCardData.appendChild(activityNameField);
//     // create menue link
//     const ellipsis = document.createElement("img");
//     ellipsis.src = "./images/icon-ellipsis.svg";
//     const link = document.createElement("a");
//     link.appendChild(ellipsis);
//     trackerCardData.appendChild(link);
//     // create current hours element
//     const currentHoursField = document.createElement("p");
//     currentHoursField.classList.add("xl-body");
//     currentHoursField.textContent = currentHours + "hrs";
//     trackerCardData.appendChild(currentHoursField);
//     // creat previous week hours
//     const prevHoursField = document.createElement("p");
//     prevHoursField.textContent = `Last week - ${prevHours}hrs`;
//     prevHoursField.classList.add("light-text");
//     prevHoursField.classList.add("justify-end");
//     trackerCardData.appendChild(prevHoursField);
//   };

//   addDataCardContent(name, hours, lastHours);
// };
// createTrackerCard("./images/icon-work.svg", "#FF8B64", 'Work', 32, 36);
// createTrackerCard("./images/icon-play.svg", "#55C2E6", 'Play', 10, 8);
// createTrackerCard("./images/icon-study.svg", "#FF5E7D", 'Study', 4, 7);
// createTrackerCard("./images/icon-exercise.svg", "#4BCF82", 'Exercise', 4, 5);
// createTrackerCard("./images/icon-social.svg", "#7335D2",'Social', 5, 10);
// createTrackerCard("./images/icon-self-care.svg", "#F1C75B", 'Self Care', 2, 2);

const activityCard = {
  _imagePath: "./images/icon-work.svg",
  _backgroundColor: "#FFF",
  _activityName: "Other",
  _currentHours: 0,
  _prevHours: 0,
  get imagePath() {
    return this._imagePath;
  },
  get backgroundColor() {
    return this._backgroundColor;
  },
  get activityName() {
    return this._activityName;
  },
  get currentHours() {
    return this._currentHours;
  },
  get prevHours() {
    return this._prevHours;
  },
  set imagePath(path) {
    this._imagePath = path;
  },
  set backgroundColor(color) {
    this._backgroundColor = color;
  },
  set activityName(name) {
    this._activityName = name;
  },
  set currentHours(hours) {
    this._currentHours = hours;
  },
  set prevHours(hours) {
    this._prevHours = hours;
  },
};

console.log(activityCard);

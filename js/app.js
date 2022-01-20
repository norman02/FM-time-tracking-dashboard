const tracker = document.getElementById("js-tracker");

/**
 * create a tracker card
 * @param image (string) URL of the background image
 * @param name (string) the name of the activity
 * @param hours (number)number of hours completed this session
 * @param lastHours (number) of hours completed last session
 */
const createTrackerCard = (image = "", name = 'Activity', hours = 0, lastHours = 0) => {
  /** create tracker card */
  const trackerCard = document.createElement("section");
  trackerCard.classList.add("tracker__card");
  tracker.appendChild(trackerCard);
  /** create background element 
   * @param imageUrl (string) URL for the background image
  */
  const createTrackerCardBackground = (imageUrl) => {
    const trackerCardBackground = document.createElement("div");
    trackerCardBackground.classList.add("tracker__card--bg");
    trackerCard.appendChild(trackerCardBackground);
    const backgroundImage = document.createElement("img");
    backgroundImage.src = imageUrl;
    trackerCardBackground.appendChild(backgroundImage);
  }
  createTrackerCardBackground(image)
  
  /** create data element */
  const trackerCardData = document.createElement("div");
  trackerCardData.classList.add("tracker__card--data");
  trackerCard.appendChild(trackerCardData);
  /** Add content to data element
   * @param activityName the name of the activity
   * @param currentHours hours completed this session
   * @param prevHours hours completed last session
   */
  const addDataCardContent = (activityName, currentHours, prevHours) => {
    // create title
    const activityNameField = document.createElement("h2");
    activityNameField.textContent = activityName;
    trackerCardData.appendChild(activityNameField);
    // create menue link
    const ellipsis = document.createElement("img");
    ellipsis.src = "./images/icon-ellipsis.svg";
    const link = document.createElement("a");
    link.appendChild(ellipsis);
    trackerCardData.appendChild(link);
    // create current hours element
    const currentHoursField = document.createElement("p");
    currentHoursField.classList.add("xl-body");
    currentHoursField.textContent = currentHours + "hrs";
    trackerCardData.appendChild(currentHoursField);
    // creat previous week hours
    const prevHoursField = document.createElement("p");
    prevHoursField.textContent = `Last week - ${prevHours}hrs`;
    prevHoursField.classList.add("light-text");
    prevHoursField.classList.add("justify-end");
    trackerCardData.appendChild(prevHoursField);
  };


  addDataCardContent(name, hours, lastHours);
};
createTrackerCard("./images/icon-work.svg", 'work', 30, 40);

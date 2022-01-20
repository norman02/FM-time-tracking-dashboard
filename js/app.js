const tracker = document.getElementById('js-tracker')

/**
 * create a tracker card
 */
const createTrackerCard = () => {
    /** create tracker card */
    const trackerCard = document.createElement('section')
    trackerCard.classList.add('tracker__card')
    tracker.appendChild(trackerCard)
    /** create background element */
    const trackerCardBackground = document.createElement('div')
    trackerCardBackground.classList.add('tracker__card--bg')
    trackerCard.appendChild(trackerCardBackground)
    const backgroundImage = document.createElement('img') 
    backgroundImage.src = './images/icon-work.svg' 
    trackerCardBackground.appendChild(backgroundImage)
    /** create data element */
    const trackerCardData = document.createElement('div')
    trackerCardData.classList.add('tracker__card--data')
    trackerCard.appendChild(trackerCardData)
    /** Add content to data element */
    // create title
    const activityName = document.createElement('h2')
    activityName.textContent = 'Work'
    trackerCardData.appendChild(activityName)
    // create menue link
    const ellipsis = document.createElement('img')
    ellipsis.src = './images/icon-ellipsis.svg'
    const link = document.createElement('a')
    link.appendChild(ellipsis)
    trackerCardData.appendChild(link)
    // create current hours element
    const currentHours = document.createElement('p')
    currentHours.classList.add('xl-body')
    currentHours.textContent = '0hrs'
    trackerCardData.appendChild(currentHours)
    // creat previous week hours
    const prevHours = document.createElement('p')
    prevHours.textContent = `Last week - 0hrs`
    prevHours.classList.add('light-text')
    prevHours.classList.add('justify-end')
    trackerCardData.appendChild(prevHours)
  
}

createTrackerCard()
const tracker = document.getElementById('js-tracker')
/**
 * add hellowWorld to the tracker secection
 */
const helloWorld = () => {
    
    const myHeader = document.createElement('h1')
    myHeader.textContent = 'hello world'
    tracker.appendChild(myHeader)
    console.log('Hello')

    
}


/**
 * create a background element
 *  1. create div class tracker__card--bg
 *  2. create img
 */
const createBackground = () => {
    const background = tracker.createElement('div')
    background.addClass('tracker__card--bg')
    /** TODO: add image */
}

/**
 * create a data element
 */

/**
 * create a tracker card
 *  1. create section
 *  1. create background elment
 *  2. create data element
 *  3. append background element
 *  4. append data element
 */
const createTrackerCard = () => {
    helloWorld()

}

createTrackerCard()
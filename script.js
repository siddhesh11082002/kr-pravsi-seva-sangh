document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll'); // Add or remove no-scroll class
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll'); // Remove no-scroll when closing menu
    }
  });

  //hero section 
  const heroSection = document.querySelector('.hero-section');
const imagePaths = [
    'images/banner/ban1.jpg',
    'images/banner/ban3.jpg',
    'images/banner/ban4.jpg',
    'images/banner/ban5.jpg',
    'images/banner/ban6.jpg',
    'images/banner/ban7.jpg',
    'images/banner/ban8.jpg',
    'images/banner/ban9.jpg',
    'images/banner/ban10.jpg'
];

// Preload images
function preloadImage(src) {
    const img = new Image();
    img.src = src;

}

// Preload the first image
preloadImage(imagePaths[0]);

let currentIndex = 0;

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length; // Loop back to the first image
}
changeBackgroundImage();
// Change image every 4 seconds
setInterval(changeBackgroundImage, 4000);

// // Donation Button
// const donationButton = document.querySelector('.donation-button');
// donationButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.open('https://docs.google.com/forms/d/e1FAIpQLSfmQHHjx6Icw0Qja1aa4zBmD9UIYDTmEm9H0cYzBz6VFkFnRA/viewform?usp=sf_link', '_blank'); 
// });
  
  // Email Button
    function sendCampaignEmail(event) {
        event.preventDefault(); // Prevents the link from navigating

           const greetings = [
        "Respected Member of Parliament,",
        "Dear Hon'ble Member of Parliament,",
        "Hon'ble Member of Parliament,",
        "Respected Sir/Ma'am,",
    ];

    // Array of varied subject lines
    const subjects = [
        "Action Required: Key Konkan Railway & NH-66 Demands for Monsoon Session",
        "On Behalf of Konkan Citizens: An Urgent Appeal on Railway & Highway Issues",
        "Unlocking Konkan's Future: Critical Railway & Infrastructure Demands for Parliament",
        "Following Up on Konkan Railway Merger & National Highway 66 Delays",
        "Urgent Priorities for Konkan Region: Awaiting Your Support in the Monsoon Session",
        "Voice of Konkan: Request for Intervention on Railway Demands",
        "Agenda for Progress: Raising Konkan's Railway Needs in Parliament"
    ];

    // Array of varied closing statements
    const closingLines = [
        "We request your active support to pursue these demands with the Railway Ministry for the benefit of Konkan’s citizens.",
        "Your leadership in championing these critical issues in Parliament would be invaluable to the people of the Konkan region.",
        "We sincerely hope you will represent our voice and advocate for these essential projects for the betterment of Konkan.",
    ];
        
        var recipients = "sandipanbhumare.mp@sansad.nic.in, sandipanbhumare@gmail.com, nageshpatil4545@gmail.com, patil.nagesh@sansad.nic.in, sc.barne@sansad.nic.in, appabarne@gmail.com, shyamkumarbarve5@gmail.com, shyam.kumarmp@mpls.sansad.in, bhaskarbhagare11.bb@gmail.com, bhaskar.bhagare@mpls.sansad.in, udayanrajebhonsle@gmail.com, udayanraje.bhonsle@sansad.nic.in, shahuchhatrapatikop@gmail.com, shahu.chhatrapatikol@sansad.nic.in, sunil.tatkare7@gmail.com, sunil.tatkare55@sansad.nic.in, anil.desai@sansad.nic.in, deshmukhsanjay400@gmail.com, sanjay.deshmukhmp@mpls.sansad.in, dhotre.anup@gmail.com, dhotre.anup@mpls.sansad.in, drshobhabachhav@gmail.com, dr.shobhataibachhav@mpls.sansad.in, email@nitingadkari.org, nitin.gadkari@nic.in, gaikwad.varsha3@sansad.nic.in, gaikwad.varsha3@gmail.com, gaikwad.varhsa3@gmail.com, piyush.goyal@gov.in, prataprao.jadhav@sansad.nic.in, jadhavprataprao25@gmail.com, prataprao.jadhav@gmail.com, jadhav.sanjay@sansad.nic.in, jadhav.sanjay@mpls.sansad.in, sanjayjadhav59@yahoo.com, drkvkale98@gmail.com, drkvkale.mp@mpls.sansad.in, mlaamarkale@gmail.com, amarsharadraokale.mp@mpls.sansad.in, kalgeshivaji@rediffmail.com, kalge.shivaji@sansad.nic.in, nr.khadase@sansad.nic.in, rakshataikhadse@gmail.com, dramolkolhe80@gmail.com, amol.kolhe@sansad.nic.in, mpnileshlanke3333@gmail.com, nilesh.lanke333@mpls.sansad.in, dhairyasheelmane@gmail.com, mp.dsmane@sansad.nic.in, nareshmhaske.mp@sansad.nic.in, nareshmhaske@gmail.com, sureshmhatre1701@gmail.com, suresh.mhatre1701@mpls.sansad.in, murlidhar.mohol@sansad.nic.in, murlidhar.mohol@gmail.com, sanjaydinapatil@rediffmail.com, sanjaydinapatil@gmail.com, sd.patil@sansad.nic.in, narayan.rane@gov.in, narayan.rane@sansad.nic.in, narayanrane52@gmail.com, narayan.rane@mpls.sansad.in, hemant.savara@sansad.nic.in, hemantsavara@yahoo.co.in, hemantsavara5@gmail.com, arvindsawantg@gmail.com, arvind.sawant@sansad.nic.in, shrikant.shinde@sansad.nic.in, shrikantshinde87@yahoo.in, supriyassule@gmail.com, supriya.sule@sansad.nic.in, supriya.sule@mpls.sansad.in, waikarravindra@gmail.com, ravindrawaikar.mp@sansad.nic.in, ravindrawaikar.mp@mpls.sansad.in, ashokchavan.009@sansad.nic.in, ashokchavan009@gmail.com, mp.medha@sansad.nic.in, ramdas@sansad.nic.in, priyanka.c19@sansad.nic.in, mpmilind.deora@sansad.nic.in, dr.agopchade@sansad.nic.in, cdhandore.mp@sansad.nic.in, bhagwat.karad@sansad.nic.in, fauzia.khanmp@sansad.nic.in";
        var cc = "Snehadubepandit.jansampark@gmail.com,Mumbaibjp2@gmail.com,Ashokdpatil111@gmail.com,vinodstawde@gmail.com,Hmkpindia@gmail.com,kesarkardeepak@gmail.com,Cm@maharashtra.gov.in,niranjanvdavkhare@gmail.com,dcm@maharashtra.gov.in,udaysamant11@gmail.com,ceo@mygov.in,nnr23682@gmail.com,Jayantrp@gmail.com,Kcvenugopal.org@gmail.com,Bharatsheth.gogavle@gmail.com,Office@mahacongress.com,Sulbhagaikwad142@gmail.com,Marathaghad@gmail.com,shekhargnikam@gmail.com,prashant.t2100@gmail.com,ravishethpatil158@gmail.com,ravindrachavan.mla@gmail.com,minister.ravindrachavan@gmail.com,ministerudaysamant@gmail.com,mlaoffice99@gmail.com,pydmlaoffice@gmail.com,kuldeep.raje2@gmail.com,rajendraa@gmail.com,edpgmr@rb.railnet.gov.in,edpg@rb.railnet.gov.in,edpm@rb.railnet.gov.in,pgcell.mumbai@gmail.com,edcc@rb.railnet.gov.in,aspg@cr.railnet.gov.in,Mchemte2@gmail.com,us-public@pmo.gov.in,dpgwr@wr.railnet.gov.in,crb@rb.railnet.gov.in,pankajamundepalwe@yahoo.in,press.secy@rb.nic.in,nitinmarathi28@gmail.com,cmpro@maharashtra.gov.in,satejdpatildyp@gmail.com,devenjd007@yahoo.com,sanjaykelkar09@gmail.com";
        var bcc = "swaditerminus@gmail.com,akhandkokanpravasiseva@gmail.com";
        
            // Pick a random element from each array
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomClosing = closingLines[Math.floor(Math.random() * closingLines.length)];
    
    const pdfLink = "https://drive.google.com/file/d/1aKoLe8yO5fCYhq09tBPdCfrhF12zn9Z8/view?usp=sharing"; 

    // Construct the email body using template literals for easy reading
    const body = `${randomGreeting}

I am writing to you today as a concerned resident of the Konkan region and a regular railway commuter.

On behalf of many others like me, I seek your kind intervention to raise the following long-pending railway demands in the upcoming Monsoon Session of Parliament:

Key Demands:

1. Merge Konkan Railway with Indian Railways – Integrate Ratnagiri region (Roha–Madure) into Central Railway and Karwar region (Pernem–Thokur) into South Western Railway, keeping KRCL as a construction arm. Kindly follow up on the Hon’ble Maharashtra CM’s letter (May 2025) on this.

2. Sawantwadi Terminus & Coaching Depot – Complete pending work at Sawantwadi Road station.

3. Mumbai–Madgaon–Mangaluru Route – Include in High-Density Network, begin full route doubling, and increase speed to 160 kmph.

4. Removal of inflated distances over Konkan Railway – Remove the 40% passenger fare and 50% goods surcharge over Konkan Railway.

5. Amrit Bharat Station Scheme for Konkan – Include Konkan Railway and Central Railway stations like Pen, Roha, Mangaon, Veer, Khed, Chiplun, Sangameshwar Road, Ratnagiri, Vilavade, Rajapur Road, Vaibhavwadi Road, Kankavali, Sindhudurg, Kudal, Sawantwadi Road in Maharashtra.

6. Train Extensions & New Services:
- Extend 17613/17614 Nanded–Panvel Express to Sawantwadi with halts at major Konkan stations.
- Start a new daytime Mumbai CSMT–Chiplun train with halts at local Konkan stations.
- Restore 50103/50104 Ratnagiri–Diva Fast Passenger to Dadar and augment to 22 LHB coaches.
- Extend 10105/10106 Sawantwadi–Diva Express to CSMT/Dadar/LTT/Thane with 22 LHB coaches and 8 unreserved coaches for Diva in 10105.

7. National Highway 66 Delay – Seek clarification from Shri Nitin Gadkari on delay beyond the June 2025 deadline; request concrete timelines for Indapur Bypass, Mangaon Bypass, and bridges.

${randomClosing}

For a detailed overview, please see the document here: ${pdfLink}

Sincerely,
A Concerned Citizen and Railway Passenger
Konkan Region, Maharashtra`;

// https://drive.google.com/file/d/1T-IdC7fDcrveqjq1w3EEMtZ3_yGuhntj/view?usp=sharing

        var emailLink = "mailto:" + encodeURIComponent(recipients) +
                        "?cc=" + encodeURIComponent(cc) +
                        "&bcc=" + encodeURIComponent(bcc) +
                        "&subject=" + encodeURIComponent(randomSubject) +
                        "&body=" + encodeURIComponent(body);

        // Create and click the temporary link to open the email client
        const tempLink = document.createElement('a');
        tempLink.href = emailLink;
        document.body.appendChild(tempLink);
        try {
            tempLink.click();
        } catch (error) {
            console.error("Failed to trigger email client:", error);
        } finally {
            document.body.removeChild(tempLink);
        }
    }

    // Select all buttons that trigger the email campaign (the original and the new floating one)
    const emailCampaignButtons = document.querySelectorAll('.email-button, #floating-email-btn');

    // Attach the same click event listener to all of them
    emailCampaignButtons.forEach(button => {
        button.addEventListener('click', sendCampaignEmail);
    });
  

/*gallery section */

    
    const newsGrid = document.getElementById('news-grid');
    
    const newsFolder = 'images/news/';
    const newsImages = [];
    for (let i = 1; i <= 10; i++) {
        newsImages.push(`NW_${i}.jpg`);
    }

    newsImages.forEach(image => {
        const articleElement = document.createElement('a');
        articleElement.href = `${newsFolder}${image}`;
        articleElement.className = 'news-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = `${newsFolder}${image}`;
        imgElement.alt = 'News Article';
        imgElement.className = 'news-image';

        // Error handling for image loading
        imgElement.onerror = function() {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available'; // Fallback alt text
        };
        
        articleElement.appendChild(imgElement);
        newsGrid.appendChild(articleElement);
    });

    // Initialize Magnific Popup for news
    $('.news-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// representive grid 

const representatives = [
    { name: "शांताराम नाईक", position: "अध्यक्ष", image: "images/representative/representative.png" },
    { name: "दीपक चव्हाण", position: "कार्याध्यक्ष", image: "images/representative/representative.png" },
    { name: "राजू कांबळे", position: "प्रमुख", image: "images/representative/representative.png" },
    { name: "तानाजी परब", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "अक्षय महापदी", position: "सचिव", image: "images/representative/representative.png" },
    { name: "दर्शन कासले", position: "सचिव", image: "images/representative/representative.png" },
    { name: "राजाराम कुंडेकर", position: "कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "मिहीर मठकर", position: "कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "नितीन जाधव", position: "उप कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "मनिष दाभोळकर", position: "अ. हिशेब तपासनीस", image: "images/representative/representative.png" },
    { name: "सुनिल उतेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्रीकांत सावंत", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "सुरेंद्र नेमळेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "परेश गुरव", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "प्रमोद सावंत", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "संदेश जिमन", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "सागर तळवडेकर", position: "संपर्क प्रमुख", image: "images/representative/representative.png" },
    { name: "अभिषेक शिंदे", position: "सह संपर्कप्रमुख", image: "images/representative/representative.png" },
    { name: "अभिजीत धुरत", position: "विशेष मार्गदर्शक", image: "images/representative/representative.png" }
];

const representativeGrid = document.querySelector('.representative-grid');

representatives.forEach(representative => {
    const card = document.createElement('div');
    card.classList.add('representative-card');
    
    card.innerHTML = `
        <img src="${representative.image}" alt="${representative.name}" class="representative-image">
        <h3>${representative.name}</h3>
        <p>${representative.position}</p>
    `;
    
    representativeGrid.appendChild(card);
});


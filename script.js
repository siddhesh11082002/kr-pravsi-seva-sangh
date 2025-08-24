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
  
  // Email Button Function (UPDATED CONTENT)
    function sendCampaignEmail(event) {
        event.preventDefault(); // Prevents the link from navigating

        // All emails are now in the "recipients" (To) field as requested
        const recipients = "gm@cr.railnet.gov.in,agm@cr.railnet.gov.in,drm@bb.railnet.gov.in,adrmop@bb.railnet.gov.in,officeofmr@gov.in,dcm@maharashtra.gov.in,dycm@maharashtra.gov.in,cm@maharashtra.gov.in,nareshmhaske@gmail.com,nareshmhaske.mp@mpls.sansad.in,mos-moib@gov.in,rajanbvichare@gmail.com,officeofdrshrikantshinde.delhi@gmail.com,shrikant.shinde@mpls.sansad.in";
        
        // CC and BCC are empty as requested
        const cc = "";
        const bcc = "";

        // New Subject Line
        const subject = "ठाणे रेल्वे स्थानकात कोकण रेल्वे प्रवासी सेवा संघाला पुन्हा एकदा कोकण रेल्वे मार्गे जाणाऱ्या गाड्यांची प्रवासी यादी बनवणे संबंधित परवानगी देणे बाबत.";

        // New Email Body
        const body = `
महोदय,

आम्ही मुंबईकर चाकरमनी आपल्याला विनम्र पूर्वक विनवणी करीत आहोत की, गणेशोत्सव दोन दिवसांवर येऊन ठेपला आहे, यंदाही हजारो मुंबईकर चाकरमनी आपल्या मूळ गावी म्हणजेच कोकणात जात आहेत.
 
       गेले अनेक वर्षे *कोकण रेल्वे प्रवासी सेवा संघ (रजि) ठाणे* ही प्रवासी संघटना ठाणे स्थानकातील फलाट क्रमांक पाच आणि सात वर आम्हा कोकणवासीयांचा सुखकर प्रवासासाठी दररोज रात्री उशीरा पर्यंत अनारक्षित ठाणे करीता असलेल्या  बोगीच्या प्रवाशांची रांग लावणे, वृद्ध - अपंग यांना व्यवस्थित जागा उपलब्ध करून देणे, गरोदर महिला, बालके यांना त्रास होऊ नये याची काळजी घेणे आदी कामे निस्वार्थपणे आणि कोणताही मोबदला न घेता सामाजिक सेवा देत आहेत.
 
       महोदय, उपरोक्त संदर्भाप्रमाणे, ठाणे येथील रेल्वे सुरक्षा बल (RPF) यांनी या संघटनेला पत्र/नोटीस पाठवून त्यांना हे काम करू नये असे बजावलेले आहे. आणि आरपीएफ च्या म्हणण्याप्रमाणे प्रवाशांनी दिवसाच्या प्रवासानुसार दिवसभर शौचालयाची सोय नसलेल्या फलाटावर उपस्थित राहणे. घरातील मंडळी ना नाहक त्रास सहन करीत फलाटावर राहणे कदापी शक्य नाही . परंतु या नियम, पत्राला/नोटिसीला आम्ही प्रवासी म्हणून प्रखर विरोध दर्शवत आहोत. कारण ठाणे स्थानकात अनारक्षित बोगीतून प्रवास करण्यासाठी हजारो चाकरमनो येत असतात, रांगे अभावी रेल्वे प्लॅटफॉर्मवर चेंगरा- चेंगरीची, गेंधळाची अनाहक स्थिती निर्माण होऊ शकते. आणि कोकणातील प्रवाशांच्या सुरक्षेचा प्रश्न निर्माण होऊ शकतो. त्यामुळे ठाणे स्थानकात  अनारक्षित बोगीतून प्रवास करणाऱ्या कोकणवासीयांना शिस्तबद्ध पद्धतीने प्रवासी यादी बननवून रांग लावण्याची व्यवस्था पुन्हा एकदा *कोकण रेल्वे प्रवासी संघ (रजि.) ठाणे* यांना द्यावे ही विनंती.

आपले विनीत,
एक कोकण रेल्वे प्रवासी`;

        // This part constructs the mailto link and opens the email client
        var emailLink = "mailto:" + encodeURIComponent(recipients) +
                         "?cc=" + encodeURIComponent(cc) +
                         "&bcc=" + encodeURIComponent(bcc) +
                         "&subject=" + encodeURIComponent(subject) +
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

    // Select all buttons that trigger the email campaign
    const emailCampaignButtons = document.querySelectorAll('.email-button, #floating-email-btn');

    // Attach the same click event listener to all of them
    emailCampaignButtons.forEach(button => {
        button.addEventListener('click', sendCampaignEmail);
    });
});
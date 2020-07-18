import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0150:0006:0002",
            name: "OzwInfoPage",
          },
          { text: "images/smartthings/sth-eth200.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1446/",
            id: "0006",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "Samsung SmartThings Hub", name: "Name" },
          { text: "STH-ETH200", id: "0006", name: "Identifier", type: "0002" },
          {
            text:
              "Whether you have two smart devices or 200, all you need is one Hub to create a smart home. Like a live-in translator, the Hub communicates with all of your different connected products–regardless of their wireless protocol– so that you can easily monitor and control them from the SmartThings app. \n\n\n• Compatible with hundreds of smart home products\n\n• Contains ZigBee and Z-Wave radios, and is also compatible with IP-accessible devices\n\n• Enables live video recording and event-based video clip recording\n\n• Contains replacement backup batteries that allow it to continue operating in the event of a power outage\n\n• Local app processing enables faster operating time  \n\n• No hard wiring or tricky installation needed\n\n• Simply attach the power supply to the back of the Hub and plug the Ethernet cable in to your Internet router. Easy peasy.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0006",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1446/ST_HUB_QSG_Grayscale.pdf",
            name: "ProductManual",
          },
          {
            text:
              'In the SmartThings mobile app, open the menu in the upper right corner and tap "My Locations." Tap the gear icon at the top right of your Hub\'s location to access the location settings. Scroll down and check that your Hub is listed as "Active" in the Hubs section. Also check that the LED indicator on the front of the Hub is a solid green and not blinking.\n\nAt the bottom of the location settings, tap the red "Remove Location" button and confirm the removal. This will delete your location, including all devices, settings, and SmartApps. Your Hub will be reset back to a factory default state and you will need the claim code that came with your Hub to re-connect it to SmartThings.',
            name: "ResetDescription",
          },
          {
            text:
              'In the SmartThings mobile app, open the menu in the upper right corner and tap "Connect New Device." Then, tap "Connect Now."',
            name: "InclusionDescription",
          },
          {
            text:
              'In the SmartThings mobile app\'s "Things" tab, tap the name of the device to show the device details. Then, open the menu in the upper right and tap "Remove."\n\nAlternatively, open the menu in the upper right corner and tap "My Locations." Tap the gear icon at the top right of your Hub\'s location to access the location settings. Scroll down to the "Hubs" section and tap on your Hub\'s name, then tap "Z-Wave Utilities." Tap "General Device Exclusion" and then the "Remove" button to confirm. The hub will enter exclude mode.',
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1446/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

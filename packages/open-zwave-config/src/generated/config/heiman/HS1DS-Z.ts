import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:0168:0168",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS1DS-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3016/",
            id: "0168",
            name: "ZWProductPage",
            type: "0168",
          },
          {
            text:
              "-  Click [Add] icon in Z-Wave Controller .\n-  Press the Networking_Button 3 times within 1.5s, Green LED is Blinking 4 times within 1 second.\n-  If Inclusion Process is successful, Green led will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "-  Wake up Notification is transmitted every 24 hours by default.\n-  Wake up Notification is transmitted after Notification Report is Transmitted",
            name: "WakeupDescription",
          },
          {
            text:
              "-  Click [Remove] icon in Z-Wave Controller\n-  Press the Networking_Button 3 times within 1.5s \n-  If Exclusion Process is successful, Green led is Blinking 6 times, then turn off.",
            name: "ExclusionDescription",
          },
          { text: "Smart Door Sensor", name: "Name" },
          {
            text:
              "Long press Networking_Button while installing batteries in the Device \n-Device Reset Locally notification is Transmitted\n-Green LED Turns off after 2 seconds.\nPlease use this procedure only when the network primary controller is missing or otherwise  inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The smart door sensor adopts Z-Wave protocol, it can detect the open or close state of door or window. when the door sensor is armed, when the door or window is opened, it will send alarm notifications to gateway immediately.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0168",
            name: "FrequencyName",
            type: "0168",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3016/HS3DS-Z-S2documentation.pdf",
            name: "ProductManual",
          },
          { text: "HS3DS-Z", id: "0168", name: "Identifier", type: "0168" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1797/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3016/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "Binary Sensor", max_associations: "5" },
              {
                index: "3",
                label: "Binary Sensor tamper",
                max_associations: "5",
              },
              { index: "4", label: "Notification", max_associations: "5" },
              {
                index: "5",
                label: "Notification tamper",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

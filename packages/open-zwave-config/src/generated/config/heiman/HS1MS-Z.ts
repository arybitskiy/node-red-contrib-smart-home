import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0260:1000:8001",
            name: "OzwInfoPage",
          },
          { text: "images/heiman/HS1MS-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1801/",
            id: "1000",
            name: "ZWProductPage",
            type: "8001",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "8001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1801/HSIMS-Z.pdf",
            name: "ProductManual",
          },
          {
            text:
              "-  Click [Remove] icon in Z-Wave PC Controller Program\n-  Press a Func_Button 3 times quickly in HS1MS-Z\n-  If Exclusion Process is successful, Green LED is Blinking 6 times, then turn off in HS1MS-Z",
            name: "ExclusionDescription",
          },
          { text: "Smart Motion Sensor", name: "Name" },
          {
            text:
              "The smart motion sensor is designed to detect motion indoors.  When the smart motion sensor detects people or animals moving, it will report the information to the users mobile phone immediately.  it is very easy to install, users should only paste the smart motion sensor on the wall, download the application and then connect the smart motion sensor to a smartphone via WiFi.  Users will know the situation of their houses remotely. The battery life is more than 1 year and the battery is also replaceable.",
            name: "Description",
          },
          {
            text:
              "-  Wake up Notification is transmitted every 24 hours by default.\n-  Wake up Notification is transmitted after Notification Report is Transmitted",
            name: "WakeupDescription",
          },
          { text: "HS1MS-Z", id: "1000", name: "Identifier", type: "8001" },
          {
            text:
              "-  Click [Add] icon in Z-Wave PC Controller Program\n-  Press a Func_Button 3 time in HS1MS-Z (Motion Sensor), Green LED is Blinking 3 times within 1 second.\n-  If Inclusion Process is successful, Green LED will turn off.",
            name: "InclusionDescription",
          },
          {
            text:
              "Long press Func_Button while installing batteries in HS1MS-Z \n-  Device Reset Locally notification is Transmitted\n-  Please use the reset procedure only when the primary controller is missing or inoperable",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1801/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
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
            num_groups: "3",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Notification",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "2",
                label: "LifeLine",
                max_associations: "5",
              },
              { index: "3", label: "Binary Sensor", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0B00:8003",
            name: "OzwInfoPage",
          },
          { text: "images/assa_abloy/nexTouch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2439/",
            id: "0B00",
            name: "ZWProductPage",
            type: "8003",
          },
          {
            text: "nexTouch Wireless Key Free Push Button with Z-Wave",
            name: "Name",
          },
          { text: "NTB620-ZW2", id: "0B00", name: "Identifier", type: "8003" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2440/nexTouch TS Manual for Cert.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Enter the 4-8 digit master PIN code followed by the gear key.\n2. Press the 7 key followed by the gear key.\n3. Press the 3 key followed by the gear key.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0B00",
            name: "FrequencyName",
            type: "8003",
          },
          {
            text:
              'Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n1. Remove the inside lever with the lever removal tool.\n2. Remove battery cover using hex wrench provided with lock.\n3. Remove four (4) AA batteries.\n4. Remove the 10-32 x 3/4" pan head screw from the center of the battery housing into the barrel nut of the outside assembly.\n5. Remove inside escutcheon. Cables may stay connected.\n6. Reinstall batteries \n7. On the back of the PC board, push and hold the Reset Button with the lever removal tool for 3 seconds.\n8. While continuing the press the reset button, temporarily remove one AA battery.\n9. Reinstall the battery\n10. Release reset button and wait 15 seconds. Speaker will announce "Welcome to Yale"\n11. Reassemble escutcheon',
            name: "ResetDescription",
          },
          {
            text:
              "Yale nexTouch™ provides small business owners a wireless access management solution with the security of commercial grade locks and the convenience and cost-efficiency of wireless installation. The nexTouch product is a keypad access lock designed to meet most small business applications, both interior and exterior. The lock can be paired with a Z-Wave system for easy integration into new and existing alarm and automation platforms.\n\nYale nexTouch offers many benefits for the small business owner, including easy management of employee access rights and attendance, seeing to unattended deliveries, monitoring of business hours, managing remote locations, and increased security. Lock features may vary based on the chosen integration system, but typically include accommodation of up to 500 users, real-time notifications, audit trail, scheduling of access rights and remote access. To meet small business security needs Yale nexTouch locks are ANSI/BHMA Grade 1 certified, UL listed for use on fire doors and windstorm listed. The product is designed for standard commercial doors, ideal for employee, delivery or back entrances. The lock is available with a backlit push button or touchscreen keypad, the latter offering low battery and tamper alarm indicators on the device.",
            name: "Description",
          },
          {
            text:
              "1. Enter the 4-8 digit master PIN code followed by the gear key.\n2. Press the 7 key followed by the gear key.\n3. Press the 1 key followed by the gear key.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2440/",
            id: "0B00",
            name: "ZWProductPage",
            type: "8001",
          },
          { text: "NTB630-ZW2", id: "0B00", name: "Identifier", type: "8001" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0B00",
            name: "FrequencyName",
            type: "8001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1857/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1970/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2439/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2440/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Silent Mode",
            size: "1",
            type: "list",
            value: "3",
            Help: "Disable the door sensor alarm function.",
            Item: [
              { label: "Silent", value: "1" },
              { label: "Low", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Auto Relock",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Re-lock Time",
            max: "255",
            min: "5",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "seconds; after successful code entry and unit unlocks, it will automatically re-lock after specified time (30 = default value)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Wrong Code Entry Limit",
            max: "7",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "\n                The number of invalid code entries lock will accept before sending TAMPER Alarm.\n                When number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n            ",
            Item: [
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8", value: "8" },
              { label: "9", value: "9" },
              { label: "10", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Language",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                The number of invalid code entries lock will accept before sending TAMPER Alarm.\n                When number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n            ",
            Item: [
              { label: "English", value: "1" },
              { label: "Spanish", value: "2" },
              { label: "French", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Shutdown Time",
            max: "127",
            min: "10",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help:
              "number of seconds unit will be inoperable after number of wrong code entries is exceeded (30 = default)",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Operating Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                The number of invalid code entries lock will accept before sending TAMPER Alarm.\n                When number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n            ",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Vacation", value: "1" },
              { label: "Privacy", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "One Touch Locking",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Privacy Button",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Reset to Factory Defaults",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Door Propped Timer",
            max: "127",
            min: "20",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "30",
            Help: "",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "DPS Alarm",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "255" },
            ],
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                Index: "1",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

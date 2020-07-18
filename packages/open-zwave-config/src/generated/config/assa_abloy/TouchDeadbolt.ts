import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 13,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0000:0002",
            name: "OzwInfoPage",
          },
          { text: "images/assa_abloy/TouchDeadbolt.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/631/",
            id: "0000",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "http://www.yalerealliving.com", name: "ProductPage" },
          {
            text:
              "Never worry about carrying around or losing your keys again. Unlock and lock your home with ease from the backlit touchscreen keypad. Create unique pin codes for friends and family and remove codes whenever you need to. This Yale Real Living lock features Z-Wave technology and seamlessly integrates into 50+ home automation and security systems. When added to most Z-Wave automation systems, lock and unlock your door, create pin codes, view access history and receive notifications from anywhere. The lock is tamper resistant, easy to install and even easier to use!",
            name: "Description",
          },
          {
            text:
              "Yale Assure Lock with Bluetooth Z-Wave Enabled Touch Screen Deadbolt",
            name: "Name",
          },
          {
            text: "Yale/YRD/ 220",
            id: "0000",
            name: "Identifier",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/1040/",
            id: "0800",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0800",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text: "YRD120-ZW-US",
            id: "0800",
            name: "Identifier",
            type: "0002",
          },
          {
            text: "https://products.z-wavealliance.org/products/2403/",
            id: "0000",
            name: "ZWProductPage",
            type: "0006",
          },
          {
            text: "05-3109-1-00-60-11",
            id: "0000",
            name: "Identifier",
            type: "0006",
          },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "0006",
          },
          {
            text: "https://products.z-wavealliance.org/products/3211/",
            id: "0600",
            name: "ZWProductPage",
            type: "8002",
          },
          { text: "YRD256-ZW2", id: "0600", name: "Identifier", type: "8002" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3251/YRD426_YaleRealLivingAssureDeadbolt_Z-WavePlus_SystemIntegratorsGuide_.pdf",
            name: "ProductManual",
          },
          {
            text:
              'Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n1. Remove the inside lever with the lever removal tool.\n2. Remove battery cover using hex wrench provided with lock.\n3. Remove four (4) AA batteries.\n4. Remove the 10-32 x 3/4" pan head screw from the center of the battery housing into the barrel nut of the outside assembly.\n5. Remove inside escutcheon. Cables may stay connected.\n6. Reinstall batteries \n7. On the back of the PC board, push and hold the Reset Button with the lever removal tool for 3 seconds.\n8. While continuing the press the reset button, temporarily remove one AA battery.\n9. Reinstall the battery\n10. Release reset button and wait 15 seconds. Speaker will announce "Welcome to Yale"\n11. Reassemble escutcheon',
            name: "ResetDescription",
          },
          {
            text:
              "1. Enter the 4-8 digit master PIN code followed by the gear key.\n2. Press the 7 key followed by the gear key.\n3. Press the 3 key followed by the gear key.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Enter the 4-8 digit master PIN code followed by the gear key.\n2. Press the 7 key followed by the gear key.\n3. Press the 1 key followed by the gear key.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0600",
            name: "FrequencyName",
            type: "8002",
          },
          {
            text: "https://products.z-wavealliance.org/products/3251/",
            id: "1000",
            name: "ZWProductPage",
            type: "8002",
          },
          { text: "YRD426-ZW2", id: "1000", name: "Identifier", type: "8002" },
          {
            text: "U.S. / Canada / Mexico",
            id: "1000",
            name: "FrequencyName",
            type: "8002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/631/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1040/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1358/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1878/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1972/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1973/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2402/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2403/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3211/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3251/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 12,
              },
              {
                text:
                  "Fixed index of alarm message to trigger lock status refresh",
                author: "Brett Daugherty",
                date: "17 Jun 2020",
                revision: 13,
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
            label: "Audio Mode",
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
              "\n\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
            Item: [
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
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
              "\n\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
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
            max: "255",
            min: "5",
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
              "\n\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm. \n\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
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
            index: "13",
            instance: "1",
            label: "Lock Status LED",
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
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "6",
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

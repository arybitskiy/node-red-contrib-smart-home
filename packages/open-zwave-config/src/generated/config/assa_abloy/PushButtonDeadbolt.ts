import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0000:0004",
            name: "OzwInfoPage",
          },
          {
            text: "images/assa_abloy/PushButtonDeadbolt.png",
            name: "ProductPic",
          },
          {
            text: "https://products.z-wavealliance.org/products/687/",
            id: "0000",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "Yale Real Living® Assure Lock™ Interconnect combines electronic deadbolts with the convenience of a passage lever for panic proof egress. From the inside, both the latchbolt and the deadbolt are retracted simultaneously in a single motion for a quick and easy exit. Ships with Z-Wave Plus Smart Module.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "Yale/YRD/ 210",
            id: "0000",
            name: "Identifier",
            type: "0004",
          },
          { text: "http://www.yalerealliving.com", name: "ProductPage" },
          {
            text:
              "Yale Real Living® Assure Lock™ Interconnected Z-Wave Enabled Push Button Deadbolt",
            name: "Name",
          },
          {
            text: "https://products.z-wavealliance.org/products/1039/",
            id: "0800",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "YRD110-ZW-US",
            id: "0800",
            name: "Identifier",
            type: "0004",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0800",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "https://products.z-wavealliance.org/products/3239/",
            id: "0600",
            name: "ZWProductPage",
            type: "8004",
          },
          {
            text:
              "Enter the 4-8 master Pin code followed by the gear key.\nPress the 7 key followed by the gear key\nPress the 1 key followed by the gear key",
            name: "InclusionDescription",
          },
          {
            text:
              "Remove the battery cover and batteries.\nRemove the interior escutcheon to access the reset button.\nThe reset button is located above the PCB cable connector.\nWhile pressing the reset button for a minimum of 3 seconds, reinstall batteries. Release reset button.\nReplace battery cover. \nPlease use this procedure only when the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          { text: "YRC216-ZW2", id: "0600", name: "Identifier", type: "8004" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0600",
            name: "FrequencyName",
            type: "8004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3239/YRC216_YaleRealLivingAssureDeadbolt_Z-WavePlus_SystemIntegratorsGuide.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Enter the 4-8 digit master pin code followed by the gear key\nPress the 7 key followed by the gear key\nPress the 3 key followed by the gear key",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/687/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1039/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1971/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3239/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Fixed index of alarm message to trigger lock status refresh",
                author: "Matt Belhorn - matt.belhorn@gmail.com",
                date: "26 Jun 2020",
                revision: 7,
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
              { label: "Off", value: "1" },
              { label: "On", value: "3" },
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
              "\n\t\t\t\tThe number of invalid code entries lock will accept before sending TAMPER Alarm.\n\t\t\t\tWhen number of wrong code entries is exceeded, lock will disable keypad for the time specified by Shutdown Time parameter. (5 = default)\n\t\t\t",
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
                Index: "0",
                Instance: "1",
                RequestFlags: "0",
              },
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

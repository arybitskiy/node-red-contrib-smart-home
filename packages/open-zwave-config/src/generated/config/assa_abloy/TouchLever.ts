import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0129:0000:0001",
            name: "OzwInfoPage",
          },
          { text: "images/assa_abloy/TouchLever.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/686/",
            id: "0000",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "http://www.yalerealliving.com", name: "ProductPage" },
          {
            text: "Yale/YRL/210",
            id: "0000",
            name: "Identifier",
            type: "0001",
          },
          { text: "Yale Real Living Push Button Lever Lock", name: "Name" },
          {
            text:
              "Yale Real Living deadbolt and lever locks are the first products in the Yale Real Living™ (www.yalerealliving.com) portfolio of home control and security solutions.  Available in both durable acrylic touchscreen or simple, elegant, tamper-resistant keypad, Yale's new platform of intelligent locks support Z-Wave, allowing them to integrate seamlessly into a wide range of home control and security systems.  \n\nRegardless of the home control system employed, users will have access to a high degree of functionality, including the ability to lock and unlock doors from web-enabled devices or create customized entry scenes for family members, neighbors and guests. Features of Yale Real Living locks include personalized access-control scenes for up to 250 users; access to all user programmable settings via select user interfaces; plus the touchscreen versions employ voice assisted programming in English, Spanish and French.  The new intelligent locks offer an elegant, next-generation home control solution for entryways and protected interior doors to make everyday living easier and safer.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/686/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
              { label: "On", value: "0" },
              { label: "Off", value: "255" },
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

import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:0004:0100",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-rgb01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1897/",
            id: "0004",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text:
              "There are two ways to reset the RGB BULB. One is that removing\nRGB BULB from the Z-Wave network, the other is that using the\nconfiguration command class.",
            name: "ResetDescription",
          },
          {
            text:
              "RGB Bulb is a smart bulb enables Z-Wave remote command and control (on/off/dim). It has over 16,000,000 colors, you can choose its color according to your favour.",
            name: "Description",
          },
          {
            text:
              "To remove the RGB BULB from the Z-Wave network:\n(1) Screw in the RGB BULB.\n(2) Set the Z-Wave network main controller into excluding mode\n(see Z-Wave controller operating manual).\n(3) Toggle the wall switch off and on 3 times quickly(within 3\nand the final ending position of the wall switch must be on),\nif the exclusion is successful, the RGB BULB will blink fast in\norange for less than 5 seconds and then keep on for 3 seconds.\nRGB BULB will keep on warm white after the exclusion procedure\nis finished.",
            name: "ExclusionDescription",
          },
          { text: "RGB Bulb", name: "Name" },
          {
            text:
              "To include RGB BULB into a Z-Wave network as a non-security device:\n(1) Make sure the power supply is disconnected and the RGB BULB is\nlocated within a direct Z-Wave network's main controller\ncommunication range.\n(2) Set the Z-Wave network main controller into learning mode\n(see Z-Wave network controller operating manual).\n(3) Insert the RGB BULB into a lamp-socket and then power on.\n(4) Auto-inclusion will be activated. If the inclusion is successful, the\nRGB BULB will blink fast in blue for less than 5 seconds and then\nkeep on for 3 seconds. RGB BULB will keep on in the color before it\nis included into the Z-Wave network after the inclusion procedure\nis finished.\n\nTo include RGB BULB into a Z-Wave network as a security device:\n(1) Screw in the RGB BULB.\n(2) Set the Z-Wave network main controller into learning mode\n(see Z-Wave network controller operating manual).\n(3) Toggle the wall switch off and on 3 times quickly (within 3 seconds\nand the final ending position of the wall switch must be on).\n(4) If the inclusion is successful, the RGB BULB will blink fast in green\nfor less than 5 seconds and then keep on 3 seconds. RGB BULB will\nkeep on in the color before it is included into the Z-Wave network\nafter the inclusion procedure is finished.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1976/HKZW-RGB01 Manual.pdf",
            name: "ProductManual",
          },
          { text: "HKZW-RGB01", id: "0004", name: "Identifier", type: "0100" },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0100",
          },
          {
            text: "https://products.z-wavealliance.org/products/1976/",
            id: "0004",
            name: "ZWProductPage",
            type: "0101",
          },
          { text: "HKZW-RGB01", id: "0004", name: "Identifier", type: "0101" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0004",
            name: "FrequencyName",
            type: "0101",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1897/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1976/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
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
            index: "21",
            instance: "1",
            label: "Status after power failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Define how the RGB BULB will react after the power supply is back on.",
            Item: [
              {
                label: "RGB BULB memorizes its state after a power failure",
                value: "0",
              },
              {
                label: "Device will be on after power supply is reconnected",
                value: "1",
              },
              {
                label: "Device will be off after power supply is reconnected",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Notification when Load status change",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "RGB BULB can send notifications to associated device ",
            Item: [
              { label: "Notifications Disabled", value: "0" },
              { label: "Send BASIC REPORT", value: "1" },
              {
                label: "Send BASIC REPORT only without status change",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "51",
            instance: "1",
            label: "Enable/disable the function of using wall switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable/disable the function of using wall switch to turn on/off RGB BULB",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Advance mode",
            max: "318816256",
            min: "3072",
            size: "4",
            type: "list",
            units: "",
            value: "3072",
            Help:
              "RGB BULB can blink or cyclic/random change color automatically at set intervals.",
            Item: [
              { label: "Stop changing", value: "3072" },
              { label: "Color gradual change randomly", value: "16826368" },
              {
                label: "Color change randomly with a breathing blink",
                value: "33603584",
              },
              { label: "Blink with random color", value: "50380800" },
              { label: "Color change randomly", value: "67158016" },
              { label: "Color gradual change", value: "285261824" },
              {
                label: "Breathing blink with a specific color",
                value: "302039040",
              },
              { label: "Blink with a specific color", value: "318816256" },
            ],
          },
          {
            genre: "config",
            index: "255",
            instance: "1",
            label: "Resetting to factory default",
            max: "1431655765",
            min: "1",
            size: "4",
            type: "list",
            units: "",
            value: "1",
            Help:
              "RGB BULB will exclude from the Z-Wave network with this particular command",
            Item: [
              {
                label: "Resetting to the factory default",
                value: "1431655765",
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

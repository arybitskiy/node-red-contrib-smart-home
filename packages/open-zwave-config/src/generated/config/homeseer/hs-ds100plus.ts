import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Door/Window Sensor", name: "Name" },
          {
            text:
              "Door/Window Sensor is a wireless reed sensor powered by AAA battery. It is used for detecting the opening or closing of doors, windows. It can communicate with an associated Z-Wave device, such as Siren, Smart Switch, etc.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/000C:0008:0201",
            name: "OzwInfoPage",
          },
          { text: "https://homeseer.com/sensors/", name: "ProductPage" },
          {
            text: "https://homeseer.com/support-home/",
            name: "ProductSupport",
          },
          { text: "images/homeseer/hs-ds100plus.png", name: "ProductPic" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2958/DoorWindowSensorEngineeringSpecification.pdf",
            name: "ProductManual",
          },
          { name: "WakeupDescription" },
          {
            text:
              "1.\tInsert the AAA battery.\n2.\tSet the Z-Wave network main controller into learning mode.\n3.\tTriple or single short press the Z-button.\n4.\tIf the add for inclusion is successful, the LED will blink less than 5 seconds and then keep on 3 seconds. Otherwise, the LED will blink 5 seconds and then turn off, in which case you need to repeat the process from step 2.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.\tInsert the AAA battery.\n2.    Pressing and holding the Z button for more than 20 seconds,\n3.    Led will keep on until the Z-Button is released, and it will reset to factory default when the button is released.\n\nUsing this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1.\tInsert the AAA battery.\n2.\tSet the Z-Wave network main controller into learning mode.\n3.\tTriple clicking the Z-button.\n4.\tIf the remove for exclusion, the LED will turn off within 1 second. Otherwise, the LED will blink 5 seconds and then turn off, in which case you need to repeat the process from step 2.",
            name: "ExclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2958/",
            id: "0008",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0008",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "HS-DS100+", id: "0008", name: "Identifier", type: "0201" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/Products/2958/XML",
                author: "Jim Stuhlmacher - jim@stuhlmacher.us",
                date: "17 Jul 2019",
                revision: 1,
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
            index: "15",
            label: "Value for basic set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Door/Window Sensor can reverse its value of BASIC SET when the magnet is triggered.\n            ",
            Item: [
              {
                label:
                  "Send BASIC SET VALUE = 255 to nodes associated with group 2 when door/window is opened.  Send BASIC SET VALUE = 0 to nodes associated with group 2 when door/window is closed.",
                value: "0",
              },
              {
                label:
                  "Send BASIC SET VALUE = 0 to nodes associated with group 2 when door/window is opened.  Send BASIC SET VALUE = 255 to nodes associated with group 2 when door/window is closed.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "32",
            label: "Low battery threshold",
            max: "50",
            min: "10",
            size: "1",
            type: "list",
            units: "%",
            value: "20",
            Help:
              "This parameter defines a battery level as the “low battery”.",
            Item: [
              { label: "10", value: "10" },
              { label: "20", value: "20" },
              { label: "30", value: "30" },
              { label: "40", value: "40" },
              { label: "50", value: "50" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

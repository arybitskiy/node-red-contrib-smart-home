import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:0008:0201",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-dws01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2775/",
            id: "0008",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2844/DoorWindowSensorEngineeringSpecification.pdf",
            name: "ProductManual",
          },
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
          { text: "HKZW-DWS01", id: "0008", name: "Identifier", type: "0201" },
          {
            text:
              "Door/Window Sensor is a wireless reed sensor powered by AAA battery. It is used for detecting the opening or closing of doors, windows. It can communicate with an associated Z-Wave device, such as Siren, Smart Switch, etc.",
            name: "Description",
          },
          {
            text:
              "1.\tInsert the AAA battery.\n2.\tSet the Z-Wave network main controller into learning mode.\n3.\tTriple clicking the Z-button.\n4.\tIf the remove for exclusion, the LED will turn off within 1 second. Otherwise, the LED will blink 5 seconds and then turn off, in which case you need to repeat the process from step 2.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0008",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "Door/Window Sensor", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/2844/",
            id: "0008",
            name: "ZWProductPage",
            type: "0200",
          },
          { text: "HKZW-DWS01", id: "0008", name: "Identifier", type: "0200" },
          {
            text: "CEPT (Europe)",
            id: "0008",
            name: "FrequencyName",
            type: "0200",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1892/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1896/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2775/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2844/xml",
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
            index: "14",
            instance: "1",
            label: "BASIC SET command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/Disable BASIC SET command",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Value of the BASIC SET",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Send BASIC SET VALUE = 255 to nodes associated with group 2 when door/window is opened.\n                Send BASIC SET VALUE = 0 to nodes associated with group 2 when door/window is closed.",
            Item: [
              { label: "255", value: "0" },
              { label: "0", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Level of low battery",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help: "The value here defines the low battery",
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
              { index: "2", label: "BASIC SET command", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

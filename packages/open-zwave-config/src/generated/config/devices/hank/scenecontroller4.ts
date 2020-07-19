import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:000B:0201",
            name: "OzwInfoPage",
          },
          { text: "images/hank/scenecontroller4.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1967/",
            id: "000B",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text:
              "To remove the Scene Controller from the Z-Wave network:\n(1) Insert the LIR2450 battery.\n(2) Set the Z-Wave network main controller into remove mode\n(see Z-Wave controller operating manual).\n(3) Triple click the a button, if the exclusion is successful, LED\nwill blink in orange for less than 5 seconds and then keep on\nfor 3 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Included as non-secure device:\n1.   Insert the LIR2450 battery.\n2.   Set the Z-Wave network main controller into learning mode( see Z-Waave network controller operating manul).\n3.   Triple click a button.\n4.   If the inclusion is successful, the LED will blink in blue less than for 5 seconds and then keep on for 15 seconds.\n\nIncluded as a secure device:\n1.   Insert the LIR2450 battery.\n2.   Set the Z-Wave network main controller into learning mode( see Z-Wave network controller operating manual).\n3.   Pressing and holding a button for 3 seconds.\n4.   If the inclusion is successful, the LED will blink in green less than for 5 seconds and then keep on for 15 seconds.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "000B",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "Scene Controller", name: "Name" },
          {
            text:
              "Pressing and holding a button for 3 seconds. Led will turn to green,\nwhich means Scene Controller has been woken up.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1968/HKZW-SCN04 Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Pressing and holding a button for 20 seconds. Release the button after 20 seconds, LED will keep in yellow for 3 seconds. Scene Controller will be reset to factory defaults if you short press the button within this 3 seconds.\nUsing this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "HKZW-SCN04", id: "000B", name: "Identifier", type: "0201" },
          {
            text:
              "The Scene Controller is a wireless, portable and rechargeable scene switch. It can control a Z-Wave device, such as smart plug, smart dimmer with a Z-Wave gateway. You can also activate a scene like sleep scene, movie scene and entertainment scene with it.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/1968/",
            id: "000B",
            name: "ZWProductPage",
            type: "0200",
          },
          {
            text: "CEPT (Europe)",
            id: "000B",
            name: "FrequencyName",
            type: "0200",
          },
          { text: "HKZW-SCN04", id: "000B", name: "Identifier", type: "0200" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1967/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1968/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
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
            index: "254",
            instance: "1",
            label: "Configuration Command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "9",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Basic Set button 1",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Multilevel Set button 1",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Basic Set button 2",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Multilevel Set button 2",
                max_associations: "5",
              },
              {
                index: "6",
                label: "Basic Set button 3",
                max_associations: "5",
              },
              {
                index: "7",
                label: "Multilevel Set button 3",
                max_associations: "5",
              },
              {
                index: "8",
                label: "Basic Set button 4",
                max_associations: "5",
              },
              {
                index: "9",
                label: "Multilevel Set button 4",
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

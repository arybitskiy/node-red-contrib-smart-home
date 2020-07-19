import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zwa001.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2840/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "LED Bulb 6: Multi-White", name: "Name" },
          {
            text:
              "Reset the device :\na)\tPlease use this procedure only when the network primary controller is missing or otherwise inoperable. \nb)\tLed bulb re-power 6 times (between 0.5-2 seconds each time); If the 6th power on, the led bulb flashes twice, which means that the resetting is successful.",
            name: "ResetDescription",
          },
          {
            text:
              "Standard form factor and appearance of the light bulb with 800 lm output\nTunable white: dimmable from 5% to 100%, tunable from 2700K to 6500K.\nPossible to be included in groups, scenes, or schedules\nSuitable for indoor lighting: Corridors, Bedroom, Living Room, etc.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2843/LED Bulb Manul.pdf",
            name: "ProductManual",
          },
          { name: "WakeupDescription" },
          { text: "ZWA001-C", id: "0001", name: "Identifier", type: "0003" },
          {
            text:
              "Remove for exclusion:\na)\tSet the Z-Wave network main controller into removing mode.\nb)\tLed bulb re-power 3 times (between 0.5-2 seconds each time).\nc)\tWait a moment, the led bulb should be removed from the controller.Then the led bulb will flash once, dim to 5% first, and then increased to 100% after 5 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Add for inclusion:\na)\tSet the Z-Wave network main controller into adding mode.\nb)\tPower cycle once for led bulb(OFF->ON).The led bulb will flash twice and send node info frame.\nc)\tWait a moment, the led bulb should be added to the controller.Then the led bulb will flash once when it has been included into the network.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "https://products.z-wavealliance.org/products/2843/",
            id: "0001",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0103",
          },
          { text: "ZWA001-A", id: "0001", name: "Identifier", type: "0103" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2840/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2843/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "80",
            label: "Notification",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable to send notifications to associated devices (Group 1) when the state of LED Bulb is changed.",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Basic CC report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Warm White temperature",
            max: "4999",
            min: "2700",
            size: "2",
            type: "short",
            units: "k",
            value: "2700",
            Help:
              "\n\t\t\t\tAdjusting the color temperature in warm white color component.\n\t\t\t\tavailable value: 2700k to 4999k",
          },
          {
            genre: "config",
            index: "82",
            label: "cold white temperature",
            max: "6500",
            min: "5000",
            size: "2",
            type: "short",
            units: "k",
            value: "6500",
            Help:
              "\n\t\t\t\tAdjusting the color temperature in cold white color component.\n\t\t\t\tavailable value:5000k to 6500k\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;

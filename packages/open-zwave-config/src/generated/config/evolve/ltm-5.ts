import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0113:3033:5457",
            name: "OzwInfoPage",
          },
          { text: "images/evolve/ltm-5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/155/",
            id: "3033",
            name: "ZWProductPage",
            type: "5457",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "5457",
          },
          { text: "LTM-5_1006", id: "3033", name: "Identifier", type: "5457" },
          {
            text:
              "http://www.eguestcontrols.com/products/lighting-devices/ltm-5/",
            name: "ProductPage",
          },
          {
            text:
              "LTM-5 Wall Mounted Transmitter\n\nThe LTM-5 Wall Mounted Transmitter is a component of the Evolve lighting control system. As it controls no load directly, wire the transmitter anywhere power is available according to the diagram above. Inclusion of the LTM-5 Wall Mounted Transmitter allows remote ON/OFF control and dimming of lights controlled by associated modules.\n\nThis Wall Mounted Transmitter is designed to work with other Evolve enabled devices. Evolve nodes of other types can be included in the network and will also act as repeaters to increase the range of the network.\n\nPower Requirements\n120 VAC, 60 Hz\nSpecifications\nSignal (Frequency) – 908.42 MHz\nRange – Up to 100 feet line of sight between the Controller and /or the closest Z-Wave Device.\nZ-Wave Version 4.52\nNetwork Inclusion\nScene – Command Class\nSecurity Compatible",
            name: "Description",
          },
          {
            text: "http://www.eguestcontrols.com/products/lighting-devices/lt",
            name: "ProductSupport",
          },
          { text: "LTM-5 - Wall mounted Z-Wave transmitter", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/155/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            label: "Ignore Start-Level (Transmitting)",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Dimmers controlled by this switch will start dimming from their current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Night Light",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            type: "list",
            value: "1",
            Help: "This dimmer will start dimming from its current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "LED transmission indication",
            size: "1",
            type: "list",
            value: "2",
            Help: "Flicker LED while transmitting.",
            Item: [
              { label: "No flicker", value: "0" },
              { label: "Flicker whole transmission", value: "1" },
              { label: "Flicker 1 second", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Polling interval",
            max: "255",
            min: "1",
            type: "byte",
            units: "minutes",
            value: "2",
            Help: "How often to poll to keep synchronized with group.",
          },
          {
            genre: "config",
            index: "21",
            label: "Poll first node in group",
            size: "1",
            type: "list",
            value: "0",
            Help: "Poll only the first node in Group 1.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group 1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;

import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3033:5257",
            name: "OzwInfoPage",
          },
          { text: "images/act/zrw103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/413/",
            id: "3033",
            name: "ZWProductPage",
            type: "5257",
          },
          {
            text:
              "US Wall Switch Relay 20A - 200 upt.Provides wireless RF ON/OFF (or manual) control of any light or lamp connected. \n•\t Can control two groups of 5 modules each independent of its own state. \n•\t Can replace current wall switch and can add 3-way or 4-way capability. \n•\t Each ZRW103 Wall Mounted Switch functions as an automatic repeater to other Z-Wave Modules to ensure full home coverage of the RF signal. \n•\t\n Supports the Powerlevel command \n\n Has automatic Static Update Controller (SUC) capability. \n This product supports 40Kbps data transmission. This product can also be used for networking support in systems that stream metadata. An example might include transmission of information from audio devices such as song album information to various displays around the home.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3033",
            name: "FrequencyName",
            type: "5257",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#top",
            name: "ProductPage",
          },
          {
            text:
              "http://www.act-solutions.com/Contact-Advanced-Control-Technologies.html",
            name: "ProductSupport",
          },
          { text: "ZRW103", id: "3033", name: "Identifier", type: "5257" },
          { text: "ZRW103", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/413/xml",
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
            value: "0",
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
            index: "19",
            label: "LED Transmission Indication",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "The ZRW103 will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all, to flicker the entire time it is transmitting, or to flicker for only 1 second when it begins transmitting.",
            Item: [
              { label: "None", value: "0" },
              { label: "While Transmitting", value: "1" },
              { label: "One Second Maximum", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Group 1", max_associations: "5" },
              {
                index: "2",
                label: "Group 2 (two taps)",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Group 3 (three taps)",
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

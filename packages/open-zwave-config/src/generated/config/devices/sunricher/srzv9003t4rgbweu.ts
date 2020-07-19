import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Z-Wave Wall Controller", name: "Name" },
          {
            text:
              "The Wall controller is a Security Enabled Z-Wave Plus device that can both control other Z-Wave devices and activate scenes in Gateways.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0330:0300:a108",
            name: "OzwInfoPage",
          },
          {
            text:
              "http://www.sunricher.com/touch-panel-rgbw-z-wave-wall-controller-sr-zv9001t4-rgbw-eu.html",
            name: "ProductPage",
          },
          { text: "http://www.sunricher.com/", name: "ProductSupport" },
          { text: "images/sunricher/srzv9003t4rgbweu.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/2945/Z-Wave%20Wall%20Controller%20SR-ZV9003T4-RGBW-EU.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Short press the “inclusion/exclusion” button, or press and hold down “ALL ON/OFF” button for over 3 seconds, the wall controller will be set to inclusion mode, and waiting to be included, then LED indicator turns on and blinks 6 times quickly to indicate successful inclusion.",
            name: "InclusionDescription",
          },
          {
            text:
              "Short press the “inclusion/exclusion” button, or press and hold down “ALL ON/OFF” button for over 3 seconds, the wall controller will be set to exclusion mode, and waiting to be excluded, then LED indicator turns on and shows 3 short blinks and 1 long blink to indicate successful exclusion.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold down “inclusion/exclusion” button for over 8 seconds, LED indicator blinks slowly to indicate successful factory reset, release “inclusion/exclusion” button,the wall controller will restart automatically.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2945",
            id: "a108",
            name: "ZWProductPage",
            type: "0300",
          },
          {
            text: "CEPT (Europe)",
            id: "a108",
            name: "FrequencyName",
            type: "0300",
          },
          {
            text: "SR-ZV9003T4-RGBW-EU",
            id: "0108",
            name: "Identifier",
            type: "0300",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial entry based on manufacturer data and test device",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "11 July 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "142",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "1" },
              {
                index: "2",
                label: "Launch 1. Press button 1 to activate group.",
                max_associations: "12",
              },
              {
                index: "3",
                label: "Launch 2. Press button 2 to activate group.",
                max_associations: "12",
              },
              {
                index: "4",
                label: "Launch 3. Press button 3 to activate group.",
                max_associations: "12",
              },
              {
                index: "5",
                label: "Launch 4. Press button 4 to activate group.",
                max_associations: "12",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

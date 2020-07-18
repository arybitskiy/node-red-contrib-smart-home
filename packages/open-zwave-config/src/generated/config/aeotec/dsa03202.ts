import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0003:0001",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsa03202.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/143/",
            id: "0003",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "Minimote Z-wave Remote Controller.The Aeon Labs Minimote is low-cost remote controller focused on end-user ease of use.\n\nAlthough simplicity and user experience is the primary focus, the full range of Z-Wave remote controller capabilities are left intact for the advanced user. Network installation is vastly improved via the interface. The Minimote is upgradeable by the end-user such that the latest Z-Wave protocols are always available. An internal lithium battery allows for months of usage and is recharged via USB.",
            name: "Description",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Aeon Labs Minimote US", name: "Name" },
          {
            text: "http://www.aeon-labs.com/site/products/view/3/",
            name: "ProductPage",
          },
          {
            text: "DSA03xxx-ZWUS v1.13",
            id: "0003",
            name: "Identifier",
            type: "0001",
          },
          {
            text: "http://www.aeon-labs.com/site/support/",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/142/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/143/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Added GetSupported false and add 3rd option to parameter 250 to work around this limitation",
                author: "Peter Gebruers - peter.gebruers@gmail.com",
                date: "22 Aug 2019",
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
        Compatibility: [{ GetSupported: [false] }],
        Value: [
          {
            genre: "config",
            index: "241",
            instance: "1",
            label: "Button #1 Mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Help:
              "Default Mode 0 The button on the Minimote uses the factory default functions for operation instead of any special functionality related to the below modes. Scene Mode 1 The button on the Minimote executes a scene from data received for Parameters Numbers 0-239 related to the button being pressed. Add Mode 2 The button on the Minimote is able to include/add devices into the Z-Wave network. Remove Mode 3 The button on the Minimote is able to remove devices from the Z-Wave network. Association Mode 4 The button on the Minimote is able to associate one device to another. Learn Mode 5 The button on the Minimote is able to allow the Minimote to be included into other Z-Wave networks and to learn Z-Wave network information.",
            Item: [
              { label: "Default Mode", value: "0" },
              { label: "Scene Mode", value: "1" },
              { label: "Add Mode", value: "2" },
              { label: "Remove Mode", value: "3" },
              { label: "Association Mode", value: "4" },
              { label: "Learn Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "242",
            instance: "1",
            label: "Button #2 Mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Item: [
              { label: "Default Mode", value: "0" },
              { label: "Scene Mode", value: "1" },
              { label: "Add Mode", value: "2" },
              { label: "Remove Mode", value: "3" },
              { label: "Association Mode", value: "4" },
              { label: "Learn Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "243",
            instance: "1",
            label: "Button #3 Mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Item: [
              { label: "Default Mode", value: "0" },
              { label: "Scene Mode", value: "1" },
              { label: "Add Mode", value: "2" },
              { label: "Remove Mode", value: "3" },
              { label: "Association Mode", value: "4" },
              { label: "Learn Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "244",
            instance: "1",
            label: "Button #4 Mode",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            write_only: "true",
            Item: [
              { label: "Default Mode", value: "0" },
              { label: "Scene Mode", value: "1" },
              { label: "Add Mode", value: "2" },
              { label: "Remove Mode", value: "3" },
              { label: "Association Mode", value: "4" },
              { label: "Learn Mode", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "250",
            label: "Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            write_only: "true",
            Help:
              "\n        Enable selective Group Mode or Scene Mode. Long press learn button to wake up device.\n        Option As-Last-Set is not a real option, it exists because the Minimote does not report back its actual setting.\n        When long-pressing a button, if RED + BLUE LED turn on/off at the same time, device is in scene mode.\n        If the BLUE LED starts blinking, it is in group mode.\n        NOTE: Minimote firmware 1.17 or higher is required, firmware 1.19 is highly recommended.",
            Item: [
              { label: "Group", value: "0" },
              { label: "Scene", value: "1" },
              { label: "As-Last-Set", value: "2" },
            ],
          },
        ],
      },
      { action: "remove", id: "38" },
      { id: "132", Compatibility: [{ CreateVars: [false] }] },
      {
        id: "133",
        Compatibility: [{ GetSupported: [false] }],
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Button #1",
                max_associations: "5",
              },
              { index: "2", label: "Button #2", max_associations: "5" },
              { index: "3", label: "Button #3", max_associations: "5" },
              { index: "4", label: "Button #4", max_associations: "5" },
            ],
          },
        ],
      },
      { action: "add", id: "155", Compatibility: [{ CreateVars: [false] }] },
    ],
  },
};

export default config;

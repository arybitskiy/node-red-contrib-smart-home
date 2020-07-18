import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0004:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan06.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/854/",
            id: "0004",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "PAN06-2", id: "0004", name: "Identifier", type: "0001" },
          { text: "In-Wall Switch Module", name: "Name" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0004",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "Features:\n- World first two relay Z-wave 400 series module in a very slim case.\n- Input voltage AC100~240V / DC24~60V.\n- Adopt Z-Wave protocol to secure the success of wireless two way communication.\n- Slim design, easy install.\n- Adopt newest Z-wave 400series chip, support multichannel operation and higher data rate (9.6/40/100kbps).\n- Resistive load 1500W X 2.\n- Two dry contact relay.\n- Z-Wave V6.02\n- Very low electricity consumption, meet Europe year 2012 energy-related products requirement directive 2009/125/EC no. 1275/2008.\n- LVD:EN 60669-2-1:2004+A1:2009+A12:2010,\n- EN 60669-2-2 :2006\n- EN 60669-1:1999+A1:2002+A2:2008+IS1:2009\n- R&TTE: EN 301489, EN 300200,",
            name: "Description",
          },
          { text: "http://philio-tech.com/", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/822/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/854/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            instance: "1",
            label: "Selected Relay",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "If the controller treats this device as a single channel relay/switch, you may select which one of the relays that will report and respond to commands. Default setting: Relay 1 + Relay 2",
            Item: [
              { label: "Relay 1", value: "1" },
              { label: "Relay 2", value: "2" },
              { label: "Relay 1 + Relay 2", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Inputs S1 and S2 configuration",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "To match different kind of external switches, the inputs S1 and S2 can be set to either Edge Mode, Pulse Mode or Edge/Toggle Mode. Edge Mode: The Position of the external switch determines the switching state of the relay. After a wireless switching command it may be needed to operate the switch twice to return to the direct relation of switch position and relay state. Toggle Mode: Each ON-Position of the external switch will toggle the state of the relays. This mode is particularly suited for mono-stable switches. Edge/Toggle-Mode: Every change of the state of the external switch results in a change of the relay state. Default setting: Edge Mode",
            Item: [
              { label: "Edge Mode", value: "1" },
              { label: "Pulse Mode", value: "2" },
              { label: "Edge/Toggle Mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Switch state after cycling power",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "When the AC power returns, e.g. after a power failure, the relay states can be set to Off, On or to retain it's last state . Default setting: Retain last state",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Retain last state", value: "1" },
              { label: "Switch On", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Auto off",
            max: "32767",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "After being switched on, the relays can be set to automatically switch off after the specified time. Available settings: 1-32767: time in seconds, 0: function disabled. Default setting: 0",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Z-Wave Off command action",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Action when a Z-Wave Off command is received. Default setting: Switch Off",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Toggle switch", value: "2" },
              { label: "Switch On", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Existence of endpoint 3 Action",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "The endpoint3 of Multi-Channel Command Class is related to relay1 and relay2. It may be redundant for the need to control relay1 or relay2 individually. When the Existence of Endpoint3 is set as 0, the endpoint3 of Multi-Channel Command Class will be disabled.  Default setting: Endpoint3 disable",
            Item: [
              { label: "Endpoint3 disable", value: "0" },
              { label: "Endpoint3 exists", value: "1" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { action: "remove", id: "113" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label: "Relay 1 and 2 together",
                max_associations: "1",
              },
              { index: "2", label: "Relay 1", max_associations: "1" },
              { index: "3", label: "Relay 2", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

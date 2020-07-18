import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 8,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0003:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan04.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/851/",
            id: "0003",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "PAN04-2", id: "0003", name: "Identifier", type: "0001" },
          { text: "http://philio-tech.com/", name: "ProductPage" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "This in-wall dual relay switch module is a transceiver which is a Z-Wave Plus™ enabled device and is fully compatible with any Z-Wave™ enabled network.  Mini size design let the module can easily hide itself into the wall box and that will be good for the house decoration. There are many kind of \napplication by using the module to switch AC power On and Off, one main application is the light control. The new smart relay calibration technology can reduce the inrush current caused by the load and let the module work perfectly with many kind of light like incandescent, fluorescent and LED light.\n\nThis in-wall switch module is able to detect Instant power wattage and overload current (7.5A) of connected light or appliances. When detecting overload state, the Module will be disabled and its On/Off button will be lockout of which LED will flash quickly. However, disconnect and re-connect the Module will reset its overload condition to normal status.",
            name: "Description",
          },
          { text: "In Wall Dual relay(1 way) switch module", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/1148/",
            id: "0012",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "1.    Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2.    Pressing INCLUDE_BUTTON three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          { text: "PAN04-1A", id: "0012", name: "Identifier", type: "0001" },
          {
            text: "CEPT (Europe)",
            id: "0012",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "This procedure should only be used in the event the primary controller is lost or otherwise inoperable.\n\n1.  Pressing INCLUDE_BUTTON three times within 2 seconds will enter inclusion mode. \n2.  Within 1 second, press INCLUDE_BUTTON again for 5 seconds. \n3.  IDs are excluded.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1148/PAN04-1-2-3A manual-20140918.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1.    Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing INCLUDE_BUTTON three times within 2 seconds will enter exclusion mode.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/820/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/851/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1148/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 7,
              },
              {
                text: "Updated Config Params",
                author: "wacki4",
                date: "30 April 2020",
                revision: 8,
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
            label: "Watt meter report period",
            max: "32000",
            min: "1",
            type: "short",
            value: "720",
            Help:
              "If the setting is configured for 1hour (set value =720), the device will report its instant power consumption every 1 hour to Z-Wave Controller. Unit: 5 seconds.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32000",
            min: "1",
            type: "short",
            value: "6",
            Help:
              "If the setting is configured for 1hour (set value =720), the device will report its power consumption in KWh every 1 hour to Z-Wave Controller. Unit: 5 seconds.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Selected end point",
            max: "3",
            min: "0",
            type: "byte",
            value: "1",
            Help: "1: Relay 1 and Relay 2. 2: Relay 1. 3: Relay 2",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Edge or Pulse mode or Edge-Toggle mode",
            max: "3",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "Edge or Pulse mode or Edge-Toggle mode defines the operating mode of the externally connected switch. Default: Edge Mode",
            Item: [
              { label: "Edge Mode", value: "1" },
              { label: "Toggle Mode", value: "2" },
              { label: "Edge/Toggle Mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Threshold of Watt for Load Caution",
            max: "1500",
            min: "10",
            type: "short",
            value: "1500",
            Help: "Threshold of Watt for Load Caution",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Threshold of kWh for Load Caution",
            max: "10000",
            min: "0",
            type: "short",
            value: "10000",
            Help: "Threshold of kWh for Load Caution",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Restore switch state mode",
            max: "2",
            min: "0",
            type: "byte",
            value: "1",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Last switch state", value: "1" },
              { label: "Switch on", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Auto off timer",
            max: "10000",
            min: "0",
            type: "short",
            value: "32767",
            Help: "0: Disable auto off function. 1-32767: 1s ~32767s",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "RF offcommand mode",
            max: "3",
            min: "0",
            type: "byte",
            value: "0",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch toggle", value: "2" },
              { label: "Switch on", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Existence of Endpoint3",
            max: "2",
            min: "1",
            type: "byte",
            value: "1",
            Item: [
              { label: "Endpoint3 exist", value: "1" },
              { label: "No Endpoint3", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Primitive frame",
            max: "2",
            min: "1",
            type: "byte",
            value: "1",
            Help: "Can repair problems with bad switch selected",
            Item: [
              { label: "Multiframe active", value: "1" },
              { label: "No multiframe", value: "2" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { action: "remove", id: "32" },
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

import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0010:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan05.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1663/",
            id: "0010",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0010",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1.Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2.Pressing Include button of PAN05 three times within 2 seconds will enter exclusion mode. \n3.Node ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "This in-wall switch module is a transceiver which is a security enabled device which based on Z-Wave Plus technology, and it is fully compatible with any Z-WaveTM enabled network. Mini size design let the module can easily hide itself into the wall box and that will be good for the house decoration. Since PAN05 supports Security Command Class, it can learn with Secured controller. Its functionality and supported command classes is identical when included as a secure and non-secure device. \nThere are many kind of application by using the module to switch Load On and Off, one main application is the light control. If connect the COM terminal directly to AC Line terminal, the new smart relay calibration technology can reduce the inrush current caused by the load and let the module work perfectly with many kind of light like incandescent, fluorescent and LED light. This module can also connect to alternative power supply like DC 12V to switch on/off 12V MR-16 light.\n\nAdding to Z-WaveTM Network \nIn the front casing, there is an on/off button with LED indicator below which is used to toggle switch on and off or carries out add, remove, reset or association. When first power applied, its LED flashes on and off alternately and repeatedly at 0.5 second intervals. It implies that it has not been assigned a node ID and start auto inclusion. \n\nAuto Inclusion \nThe function of auto inclusion will be executed as long as the in wall switch does not have Node ID and just connect the switch to main power. \nNote: Auto inclusion timeout is 2 minute during which the node information of explorer frame will be emitted once every several seconds. Unlike “Add” function as shown in the table below, the execution of auto inclusion is free from pressing the On/Off button on the Switch.",
            name: "Description",
          },
          {
            text:
              "1.Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2.Pressing Include button of PAN05 three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1.Pressing Include button of PAN05 three times within 2 seconds will enter inclusion mode. \n2.Within 1 second, press Include button of PAN05 again for 5 seconds. \n3.IDs are excluded.",
            name: "ResetDescription",
          },
          { text: "In Wall Single relay(1way) switch module", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1663/PAN05-1-2-3B manual-20160215.pdf",
            name: "ProductManual",
          },
          { text: "PAN05-1B", id: "0010", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1149/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text: "Fix WhiteSpace Error",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "17 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1663/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "1",
            instance: "1",
            label: "Inputs S1 and S2 configuration",
            max: "3",
            min: "1",
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
            index: "2",
            instance: "1",
            label: "Switch state after cycling power",
            max: "2",
            min: "0",
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
            index: "3",
            instance: "1",
            label: "Manual On/Off mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "The On/Off function of S1,S2 and learn switch can be disabled or enabled by this parameter, default value is Enable. But the learning operation wont be affected. When manual On/Off function is disabled, the RF command can only switch On but not Off. This is useful function for keeping the device in switch on state",
            Item: [
              { label: "Disable manual On/Off", value: "0" },
              { label: "Enable manual On/Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "LED indication mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Controls the light indicator in the device\n               Switch State: When switch is on, LED is on. When switch is off, LED is off. (default)\n               Night mode: When switch is on, LED is off. When switch is off, LED is on.\n               One flash: When the device changes state, the LED illuminates for one second.\n         ",
            Item: [
              { label: "Switch state", value: "1" },
              { label: "Night mode", value: "2" },
              { label: "One flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
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
            index: "6",
            instance: "1",
            label: "Z-Wave Off command action",
            max: "3",
            min: "0",
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
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { action: "remove", id: "113" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Report ON/OFF status of Relay",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

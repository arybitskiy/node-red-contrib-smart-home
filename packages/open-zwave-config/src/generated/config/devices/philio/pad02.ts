import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0031:0005",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pad02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2355/",
            id: "0031",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable. \n1. Pressing Include button of PAD02 three times within 2 seconds will enter inclusion mode.\n2. Within 1 second, press Include button of PAD02 again for 5 seconds. \n3. IDs are excluded.",
            name: "ResetDescription",
          },
          { text: "PAD02", id: "0031", name: "Identifier", type: "0005" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2355/PAD02-A1 manual-20170405.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer.\n2. Pressing Include button of PAD02 three times within 2 seconds will enter exclusion mode. \n3. Node ID has been excluded.",
            name: "ExclusionDescription",
          },
          { text: "Z-Wave Smart Dimmer Socket", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0031",
            name: "FrequencyName",
            type: "0005",
          },
          {
            text:
              "PAD02 is an E27(EU)/ E26(US) Edison screw based lamp socket, which provides electrical connection to the E14(EU)/ E12(US) Edison screw based lamps and support it in the lighting fixture. The use of socket allows lamps to be safely and conveniently replaced. You can On/Off the light by pressing the button briefly, or a long pressing to control the brightness of dimmable lightbulb. \nThis dimmer is a transceiver which is a security enabled device which based on Z-Wave Plus technology. Z-Wave PlusTM enabled devices displaying the Z-Wave PlusTM logo can also be used with it regardless of the manufacturer, and can also be used in other manufacturer’s Z- WaveTM enabled networks. Remote dim level control of the connected light is possible with other manufacturer’s wireless Controller. Since PAD02 supports Security Command Class, it can learn with a Secured enabled controller to fully utilize the device. Its functionality and supported command classes is identical when included as a secure and non-secure device. \n\nAdding to Z- WaveTM  Network \nIn the front casing, there is an on/off button with LED indicator below which is used to switch on and off, dim level, or carries out add, remove, reset or association. When first power is applied, its LED flashes on and off alternately and repeatedly at 0.5 second intervals. It implies that it has not been assigned a node ID and start auto inclusion. \n\nAuto Inclusion\nThe function of auto inclusion will be executed as long as the dimmer does not have Node ID and just connect the dimmer to main power. Note: Auto inclusion timeout is 2 minute during which the node information of explorer frame will be emitted once every several seconds. Unlike “inclusion” function as shown in the table below, the execution of auto inclusion is free from pressing the On/Off button on the dimmer.",
            name: "Description",
          },
          {
            text:
              "1. Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer.\n2. Pressing Include button of PAD02 three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2355/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            label: "Dimmer Level Report mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Whenever dimmer on/off state changes, it will send MULTILEVEL_SWITCH_ REPORT to the nodes of group1.\n                The default setting is Enable the function.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "LED indication mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Show dimmer State: When dimmer is on, LED is on. When dimmer is off, LED is off.\n                Show Night mode: When dimmer is on, LED is off. When dimmer is off, LED is on.\n                One flash mode: When dimmer on/off state changes, LED will light on one second and then off.\n            ",
            Item: [
              { label: "Show dimmer state", value: "1" },
              { label: "Show night mode", value: "2" },
              { label: "One flash mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Restore dimmer state",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Whenever the AC power return from lost, PAD02 will restore the switch state which could be Dimmer off, Last dimmer state, Dimmer on.\n                The default setting is Last dimmer state.\n            ",
            Item: [
              { label: "Dimmer off", value: "0" },
              { label: "Last dimmer state", value: "1" },
              { label: "Dimmer on", value: "2" },
            ],
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
              {
                index: "2",
                label: "Retransmit local Control",
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

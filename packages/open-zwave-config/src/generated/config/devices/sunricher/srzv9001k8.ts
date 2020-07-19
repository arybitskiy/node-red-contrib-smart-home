import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0330:a305:0300",
            name: "OzwInfoPage",
          },
          { text: "images/sunricher/srzv9001k8.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3334",
            id: "a305",
            name: "ZWProductPage",
            type: "0300",
          },
          {
            text:
              "https://www.sunricher.com/media/resources/manual/SR-ZV9001K8-DIM-G4%20Instruction%20V1.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The remote control is a Z-Wave device that can both control other Z-Wave devices and activate scenes in Gateways.",
            name: "Description",
          },
          { text: "Wall Controller", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "a305",
            name: "FrequencyName",
            type: "0300",
          },
          {
            text: "SR-ZV9001K8-DIM-G4",
            id: "a305",
            name: "Identifier",
            type: "0300",
          },
          {
            text:
              'Step 1. Make sure the remote control does not belong to any Z-Wave network, short press any button, if LED\nindicator does not turn on, the remote control does not belong to any network, then continue step 2,if LED\nindicator turns on, it means the remote control has already been included to a network, please first set the\nremote control to exclusion mode (refer to the part "Exclusion" of this manual),then continue step 2.\nStep 2. Set primary controller/gateway into inclusion mode (Please refer to your primary controllers manual on\nhow to turn your controller into inclusion).\nStep 3. Press and hold down both buttons and of Group 2 over 3 seconds, LED indicator turns on, the\nremote control will be set to inclusion mode, and waiting to be included, after 10s LED indicator blinks 6 times\nquickly to indicate successful inclusion. The remote control is a sleepy device, after inclusion it will not enter\ninto sleepy mode immediately, and will continue activation status for 30s and wait data interaction from the\ngateway, the LED indicator will stay solid on, please be patient to wait LED indicator to turn off.',
            name: "InclusionDescription",
          },
          {
            text:
              "There are two exclusion methods:\nMethod 1: Exclusion from the primary controller/gateway as follows:\n1. Set the primary controller/gateway into exclusion mode (Please refer to your primary controllers manual on\nhow to set your controller into exclusion).\n2. Press and hold down both buttons and of Group 2 over 3 seconds, LED indicator turns on, the remote\ncontrol will be set to exclusion mode, and waiting to be excluded, after 7s LED indicator blinks 4 times quickly to\nindicate successful exclusion.\nMethod 2: Factory reset the remote control will force the remote control to be excluded from a network. (please\nrefer to the part “Factory Reset” of this manual)\nNote: Factory reset is not recommended for exclusion, please use this procedure only if the primary\ncontroller/gateway is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press and hold down both buttons and of Group 2 for over 10 seconds, LED indicator turns on and then blinks 4 times quickly to indicate successful factory reset.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Configuration file",
                author: "GizMoCuz",
                date: "12 Jun 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Button 1", max_associations: "12" },
              { index: "3", label: "Button 2", max_associations: "12" },
              { index: "4", label: "Button 3", max_associations: "12" },
              { index: "5", label: "Button 4", max_associations: "12" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;

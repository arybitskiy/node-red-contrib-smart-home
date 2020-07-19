import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010c:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/there/800z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/758/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text: "http://therecorporation.com/en/platform",
            name: "ProductPage",
          },
          { text: "ThereGate Gateway Controller", name: "Name" },
          {
            text:
              "ThereGate integrates different systems and equipment used in buildings and homes for remote data acquisition, control and automation. It is a hub that allows for cost efficient connection of many systems and devices to each other, to the network, to back-end systems and to the users with easy, ubiquitous interfaces. ThereGate is a development of the Nokia Home Control Center (HCC). It is a Linux based platform with open interfaces and a software engine (ThereCore™) that enables easy creation of applications and the integration of different devices, technologies and protocols. The base services (ThereWare™), once implemented for one device, are then equally available to any solution built on ThereGate – either by There Corporation or by any party developing applications that run on the gateway.\n\nDepending on the solution, connectivity may be realized in different ways. Some applications are mainly used locally, but most involve remote connections. The ThereGate concept is designed to work equally well with regular existing internet connections and the optional built in 3G modem, regardless if the user is a service provider’s system or a person browsing with a cellular phone.\n \nIn addition to the power of limitless connectivity and local processing options ThereGate also has a full fledged Web server inside, like any powerful Linux server. This web server is connected to all the services and resources inside the gate allowing for development of local applications and displays.\n \nThe possibility for local applications and displays & user interfaces is important for a number of reasons, one of them being the interactivity and speed. To gather and display real-time information from a number of sources just doesn’t make sense any other way than locally. The amount of data in this kind of applications makes use of back-end systems or web portals too impractical and expensive. The amount and granularity of real-time or near real-time measurement data also brings along the issues of privacy – because it can reveal very much information of the property and the inhabitants. So this kind of information is best safe at home, only in the fingers of the person(s) who own it. Relevant pieces of it can then be made available for external services.",
            name: "Description",
          },
          { text: "800Z", id: "0001", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/758/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;

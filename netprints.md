---
layout: page
permalink: /netprints/
---

![](https://raw.githubusercontent.com/RobinKa/RobinKa.github.io/master/NetPrintsBanner.png)

### Description
NetPrints is a visual programming language inspired by Unreal Engine 4's Blueprints which compiles into .NET binaries or alternatively C# source code. These can be used from any other .NET language (eg. C#) or used as standalone programs. Furthermore any .NET binaries (both .NET Framework and .NET Core, and ideally .NET Standard) can be referenced and used. Its goal is to support using anything that is made in C#.

### Links
[Repository](https://github.com/RobinKa/netprints)

[0.0.7 Release Page](https://github.com/RobinKa/netprints/releases/tag/0.0.7)

[Unity tutorial](https://github.com/RobinKa/NetPrintsUnityTutorial)

### Use cases
Here's an example of using NetPrints in Unity. It is set to generate source code so the generated code can be debugged in Unity too. In the example a class inheriting from `MonoBehaviour` is defined which moves the object during `FixedUpdate()`. Nothing about NetPrints is Unity specific but it just works when referencing Unity's libraries. The full tutorial can be found at the above link.

![](https://raw.githubusercontent.com/RobinKa/NetPrintsUnityTutorial/master/Screenshots/MethodFixedUpdate.png)

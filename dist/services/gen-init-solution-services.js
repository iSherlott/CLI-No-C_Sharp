"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateSLN() {
    return `
Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 17
VisualStudioVersion = 17.6.33801.468
MinimumVisualStudioVersion = 10.0.40219.1
Project("{9A19103F-16F7-4668-BE54-9A1E7A4F7556}") = "Domain", "Domain\\Domain.csproj", "{BAC1D319-0FA4-4B58-BB97-0A2DE4DC4B05}"
EndProject
Project("{9A19103F-16F7-4668-BE54-9A1E7A4F7556}") = "API", "API\\API.csproj", "{0E3E91A1-264D-4E18-96F5-8F90FC38D13B}"
	ProjectSection(ProjectDependencies) = postProject
		{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48} = {BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}
	EndProjectSection
EndProject
Project("{9A19103F-16F7-4668-BE54-9A1E7A4F7556}") = "Infrastructure", "Infrastructure\\Infrastructure.csproj", "{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}"
EndProject
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "IoC", "IoC\\IoC.csproj", "{DA39047A-8547-4CAA-A6FA-944E7755162F}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
		Release|Any CPU = Release|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{BAC1D319-0FA4-4B58-BB97-0A2DE4DC4B05}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{BAC1D319-0FA4-4B58-BB97-0A2DE4DC4B05}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{BAC1D319-0FA4-4B58-BB97-0A2DE4DC4B05}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{BAC1D319-0FA4-4B58-BB97-0A2DE4DC4B05}.Release|Any CPU.Build.0 = Release|Any CPU
		{0E3E91A1-264D-4E18-96F5-8F90FC38D13B}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{0E3E91A1-264D-4E18-96F5-8F90FC38D13B}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{0E3E91A1-264D-4E18-96F5-8F90FC38D13B}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{0E3E91A1-264D-4E18-96F5-8F90FC38D13B}.Release|Any CPU.Build.0 = Release|Any CPU
		{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{BEBFE9F1-47C3-43F8-8C46-62BCE974EB48}.Release|Any CPU.Build.0 = Release|Any CPU
		{DA39047A-8547-4CAA-A6FA-944E7755162F}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{DA39047A-8547-4CAA-A6FA-944E7755162F}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{DA39047A-8547-4CAA-A6FA-944E7755162F}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{DA39047A-8547-4CAA-A6FA-944E7755162F}.Release|Any CPU.Build.0 = Release|Any CPU
	EndGlobalSection
	GlobalSection(SolutionProperties) = preSolution
		HideSolutionNode = FALSE
	EndGlobalSection
	GlobalSection(ExtensibilityGlobals) = postSolution
		SolutionGuid = {C5FC4A92-136C-42BA-9AE0-88D6A1223F8A}
	EndGlobalSection
EndGlobal
    `;
}
exports.default = generateSLN();

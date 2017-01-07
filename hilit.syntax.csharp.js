(function () {

	if (this.HiLit) {
		this.HiLit.Replacements = this.HiLit.Replacements || [];
		this.HiLit.Replacements["csharp"] = {
			"(?:[public|private|sealed|abstract|internal|][\\s+]class[\\s+])([\\w\\d]+)": "green", // classes
			"\\[([A-Za-z0-9]+)": "green", //attributes
			"(\\\"\\w+\\\")": "red", // strings
			"((using)\\\s+\\(|(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|partial|remove|select|set|value|var|where|where|yield)\\s+)": "blue", //system types & keywords
		};
	}

}());
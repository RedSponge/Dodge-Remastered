const metadata = {
	version:"0.1",
	stage:"alpha",
	authors:["RedSponge"],
	
	
	
	
	
	authorList: () => {
		if(metadata.authors.length < 1) {
			metadata.authorList = "Nobody :("
			return;
		}
		else if(metadata.authors.length == 1) {
			metadata.authorList = metadata.authors[0];
			return;
		} else {
			fullText = metadata.authors[0]
			for(var i = 1; i < metadata.authors.length; i++) {
				if(i < metadata.authors.length - 1) {
					fullText += ", "
				} else {
					fullText += " and "
				}
				fullText += metadata.authors[i]
			}
			metadata.authorList = fullText;
			return;
		}
	}
}

metadata.authorList();
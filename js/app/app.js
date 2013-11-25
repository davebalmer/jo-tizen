App = {
	load: function() {
		// typical card stack, nav and footer
		this.screen = new joScreen(
			new joFlexcol([
				this.nav = new joNavbar(),
				this.stack = new joStackScroller()
			])
		);
		
		// attach the nav to our stack
		this.nav.setStack(this.stack);

		// push our menu card
		this.stack.push(joCache.get("menu"));
	}
};
